import type { Request, Response } from "express";

export interface IOpenApiUIOption {
  specPath: string;
  title?: string;
  description?: string;
  theme?: string;
  cdn?: string;
}

export const loadConfig = (options: IOpenApiUIOption) => {
  const { specPath = "/openapi.json", theme, cdn } = options;
  return `
    <div id="openapi-ui-container" spec-url="${specPath}" theme="${theme}"></div>
    <script src="${cdn || "https://unpkg.com/openapi-ui-dist"}"></script>
  `;
};

export function openApiUIReference(options: IOpenApiUIOption) {
  const { title = "Example API", description = "Example API Description" } = options;

  return (_: Request, res: Response) => {
    res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8" />
      <meta name="description" content="${description}">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      ${loadConfig(options)}
    </body>
  </html>
`);
  };
}
