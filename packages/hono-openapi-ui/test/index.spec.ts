import { describe, expect, it } from "vitest";
import { loadConfig } from "../src";

describe("loadConfig", () => {
  const url = "https://petstore3.swagger.io/api/v3/openapi.json";

  it("renders the given spec URL", () => {
    expect(loadConfig({ specPath: url }).toString()).toContain("https://petstore3.swagger.io/api/v3/openapi.json");
  });

  it("renders the given spec URL with custom cdn", () => {
    expect(
      loadConfig({
        specPath: url,
        cdn: "https://cdn.jsdelivr.net/npm/openapi-ui-dist",
      }).toString(),
    ).toContain("openapi-ui-dist");
  });
});
