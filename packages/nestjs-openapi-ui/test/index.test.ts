import { describe, expect, it } from "vitest";

import { OpenApiUIReference } from "../src";

describe("OpenApiUIReference", () => {
  const url = "https://petstore3.swagger.io/api/v3/openapi.json";

  it("renders the given spec URL", () => {
    expect(OpenApiUIReference({ specPath: url }).toString()).toContain(
      "https://petstore3.swagger.io/api/v3/openapi.json",
    );
  });

  it("renders the given spec URL with custom cdn", () => {
    expect(
      OpenApiUIReference({
        specPath: url,
        cdn: "https://unpkg.com/openapi-ui-dist",
      }).toString(),
    ).toContain("openapi-ui-dist");
  });
});
