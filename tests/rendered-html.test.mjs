import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.match(html, /Pick\. Play\. Make\./);
  assert.match(html, /KATSEYE Beat Flip/);
  assert.match(
    html,
    /https:\/\/awoele\.github\.io\/yxy-loopit-cases\/og\.png/,
  );
  assert.doesNotMatch(html, /Expression Hunt|表情捕捉/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("uses only the three published Loopit cases", async () => {
  const jjk = path.join(rootPath, "dist", "client", "cases", "jjk", "index.html");
  const katseye = path.join(rootPath, "dist", "client", "cases", "katseye", "index.html");

  await Promise.all([
    assert.rejects(access(jjk)),
    assert.rejects(access(katseye)),
    access(path.join(rootPath, "dist", "client", "og.png")),
    access(path.join(rootPath, "dist", "client", "covers", "loopit-template-case.png")),
    access(path.join(rootPath, "dist", "client", "covers", "katseye-free-normal.png")),
    access(path.join(rootPath, "dist", "client", "loopit-logo.png")),
  ]);
  const response = await render();
  const html = await response.text();
  for (const id of [
    "bf21b412-b9f9-44bf-9888-030ef1c95912",
    "809bf4dd-d9e8-4933-93c9-2d4ce7b02ad0",
    "31aa1f18-6298-48ef-b7f4-da9c5988fc28",
  ]) {
    assert.match(html, new RegExp(`https://(?:share|cdn-cf)\\.loopit\\.me/[^\"']*${id}`));
  }
});

test("starter preview files and dependency are removed", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(path.join(rootPath, "app", "_sites-preview")));
});
