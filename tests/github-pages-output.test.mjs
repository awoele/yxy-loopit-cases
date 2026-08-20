import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);

test("exports the showcase under the GitHub repository base path", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /\/yxy-loopit-cases\/_next\//);
  assert.match(html, /\/yxy-loopit-cases\/loopit-logo\.png/);
  assert.match(html, /\/yxy-loopit-cases\/covers\/loopit-template-case\.png/);
  assert.match(html, /\/yxy-loopit-cases\/covers\/katseye-free-normal\.png/);
  assert.match(
    html,
    /https:\/\/awoele\.github\.io\/yxy-loopit-cases\/og\.png/,
  );
  assert.doesNotMatch(html, /(?:src|href)="\/(?:_next|loopit-logo|covers)\//);
  assert.doesNotMatch(html, /background-image:\s*url\(\/covers\//);
  assert.doesNotMatch(html, /\/yxy-loopit-cases\/https?:\/\//);

  for (const id of [
    "bf21b412-b9f9-44bf-9888-030ef1c95912",
    "809bf4dd-d9e8-4933-93c9-2d4ce7b02ad0",
    "31aa1f18-6298-48ef-b7f4-da9c5988fc28",
  ]) {
    assert.match(
      html,
      new RegExp(`https://(?:share|cdn-cf)\\.loopit\\.me/[^"]*${id}`),
    );
  }

  await Promise.all([
    access(new URL("og.png", output)),
    access(new URL("loopit-logo.png", output)),
    access(new URL("covers/loopit-template-case.png", output)),
    access(new URL("covers/katseye-free-normal.png", output)),
  ]);
});
