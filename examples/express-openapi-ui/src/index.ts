import { openApiUIReference } from "@openapi-ui/express-openapi-ui";
import Express from "express";
import swaggerJsdoc from "swagger-jsdoc";

const app = Express();
const docsPath = "/openapi";
const specPath = "/openapi.json";

/**
 * @openapi
 * components:
 *   schemas:
 *     HelloWorldResModel:
 *       type: object
 *       required:
 *         - data
 *       properties:
 *         data:
 *           type: string
 */

/**
 * @openapi
 * /helloword:
 *   get:
 *     operationId: "HelloWordGet"
 *     description: Get a mysterious map
 *     responses:
 *       200:
 *         description: Returns a mysterious map
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelloWorldResModel'
 *       400:
 *         description: Returns failed
 */
app.get("/helloword", (req, res) => {
  res.send({ data: "Hello World!" });
});

const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
  },
  apis: ["./src/*.ts"], // files containing annotations as above
});

// Serve the OpenAPI specification
app.get(specPath, (req, res) => {
  res.json(openApiSpec);
});

// Serve the OpenAPI UI
app.use(
  docsPath,
  openApiUIReference({
    title: "openapi docs",
    description: "openapi docs description",
    specPath: specPath,
  }),
);

const PORT = Number(process.env.PORT) || 8003;
const HOST = process.env.HOST || "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`✅ Express listening at http://127.0.0.1:${PORT}${docsPath}`);
});
