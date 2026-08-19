import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const rootPath = fileURLToPath(root);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://showcase.local/", {
      headers: {
        accept: "text/html",
        host: "showcase.local",
        "x-forwarded-host": "showcase.local",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the three-case showcase and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AI 创意互动实验/);
  assert.match(html, /#MyJJKDomain/);
  assert.match(html, /BLACK or PINK/);
  assert.match(html, /KATSEYE Beat Flip/);
  assert.match(html, /https:\/\/showcase\.local\/og\.png/);
  assert.doesNotMatch(html, /Expression Hunt|表情捕捉/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("ships both same-origin playable builds without camera code", async () => {
  const jjk = path.join(rootPath, "dist", "client", "cases", "jjk", "index.html");
  const katseye = path.join(rootPath, "dist", "client", "cases", "katseye", "index.html");
  const katseyeAssets = path.join(rootPath, "dist", "client", "cases", "katseye", "assets");

  await Promise.all([
    access(jjk),
    access(katseye),
    access(path.join(rootPath, "dist", "client", "og.png")),
  ]);
  const files = await readdir(katseyeAssets, { recursive: true });
  const scripts = files.filter((file) => file.endsWith(".js"));
  const source = (
    await Promise.all(
      scripts.map((file) => readFile(path.join(katseyeAssets, file), "utf8")),
    )
  ).join("\n");

  assert.ok(scripts.length > 0);
  assert.doesNotMatch(
    source,
    /Expression Hunt|ExpressionHunt|FaceLandmarker|getUserMedia|useCamera/,
  );
});

test("starter preview files and dependency are removed", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(path.join(rootPath, "app", "_sites-preview")));
});
