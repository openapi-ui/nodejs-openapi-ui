import type { Request, Response } from "express";
import { type FastifyRequest } from "fastify";
import { type ServerResponse } from "http";

export interface IOpenApiUIOption {
  // docsPath?: string;
  specPath: string;
  title?: string;
  description?: string;
  theme?: string;
  withFastify?: boolean;
  cdn?: string;
}

export const OpenApiUIReference = (options: IOpenApiUIOption) => {
  const { specPath = "/openapi.json", theme, cdn } = options;
  return `
    <div id="openapi-ui-container" spec-url="${specPath}" theme="${theme}"></div>
    <script src="${cdn || "https://unpkg.com/openapi-ui-dist"}"></script>
  `;
};

export function openApiUIReference(options: IOpenApiUIOption) {
  const { title = "Example API", description = "Example API Description" } = options;

  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta charset="utf-8" />
        <meta name="description" content="${description}">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        ${OpenApiUIReference(options)}
      </body>
    </html>
  `;

  if (options.withFastify) {
    return (req: FastifyRequest, res: ServerResponse) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(content);
      res.end();
    };
  }

  return (req: Request, res: Response) => {
    res.send(content);
  };
}
