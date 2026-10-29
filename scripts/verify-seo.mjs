import assert from "node:assert/strict";

const base = process.env.SEO_CHECK_BASE_URL ?? "http://localhost:3000";
const canonicalOrigin = "https://www.bikashshaw.in";

console.log(
  `Checking SEO at ${base}. The server must be running the latest source or production build.`
);

async function request(path) {
  return fetch(new URL(path, base), {
    headers: { "User-Agent": "Googlebot" },
    signal: AbortSignal.timeout(20_000),
  });
}

async function read(path) {
  const response = await request(path);
  assert.equal(response.status, 200, `${path}: expected HTTP 200`);
  return response.text();
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ])
  );
}

const robots = await read("/robots.txt");
assert.match(robots, /User-Agent: \*/i);
assert.match(robots, /Allow: \/(?:\r?\n|$)/i);
assert.ok(robots.includes(`${canonicalOrigin}/sitemap.xml`));

const sitemap = await read("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1]
);
assert.ok(
  urls.length >= 3,
  "Sitemap should include home, resume, and experience"
);
assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");
assert.ok(urls.includes(`${canonicalOrigin}/`));
assert.ok(urls.includes(`${canonicalOrigin}/resume`));
assert.ok(urls.includes(`${canonicalOrigin}/sony-logistics`));

const titles = new Set();
const descriptions = new Set();

for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, canonicalOrigin);
  assert.equal(parsed.hash, "", "Sitemap must not include fragments");
  const html = await read(parsed.pathname);
  const metadata = Object.fromEntries(
    [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => {
      const attrs = attributes(tag);
      return [attrs.name ?? attrs.property, attrs.content];
    })
  );
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => attributes(tag))
    .find((attrs) => attrs.rel === "canonical");
  assert.ok(canonical?.href, `${url}: missing canonical`);
  assert.equal(
    new URL(canonical.href).href,
    url,
    `${url}: incorrect canonical`
  );
  assert.ok(metadata["og:url"], `${url}: missing OG URL`);
  assert.equal(
    new URL(metadata["og:url"]).href,
    url,
    `${url}: incorrect OG URL`
  );
  assert.ok(
    metadata["og:image"]?.includes("/opengraph-image.png"),
    `${url}: missing OG image. If using bun run start, rebuild with bun run build and restart the server after source changes.`
  );
  assert.ok(
    metadata["twitter:image"]?.includes("/opengraph-image.png"),
    `${url}: missing Twitter image`
  );
  assert.equal(metadata["twitter:card"], "summary_large_image");
  assert.ok(metadata.description?.length > 30, `${url}: missing description`);
  assert.ok(
    !metadata.robots?.includes("noindex"),
    `${url}: unexpectedly noindex`
  );
  assert.ok(!html.includes("og-image.webp"), `${url}: stale social image`);
  assert.equal(
    [...html.matchAll(/<main\b/g)].length,
    1,
    `${url}: main landmark`
  );
  assert.equal(
    [...html.matchAll(/<h1\b/g)].length,
    1,
    `${url}: primary heading`
  );

  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title?.includes("Bikash Shaw"), `${url}: missing author in title`);
  assert.ok(!titles.has(title), `${url}: duplicate page title`);
  assert.ok(
    !descriptions.has(metadata.description),
    `${url}: duplicate description`
  );
  titles.add(title);
  descriptions.add(metadata.description);

  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].map((match) => JSON.parse(match[1]));
  assert.ok(schemas.length > 0, `${url}: missing structured data`);
  for (const schema of schemas) {
    assert.equal(schema["@context"], "https://schema.org");
  }
}

const directory = await read("/llms.txt");
for (const url of urls)
  assert.ok(directory.includes(url), `Missing ${url} in llms.txt`);

const image = await request("/opengraph-image.png");
assert.equal(image.status, 200);
assert.match(image.headers.get("content-type") ?? "", /image\/png/);

const missing = await request("/seo-verification-nonexistent-page");
assert.equal(missing.status, 404, "Unknown routes must return HTTP 404");

console.log(
  `SEO checks passed for ${urls.length} pages, robots, sitemap, social image, llms.txt, and 404 handling.`
);
