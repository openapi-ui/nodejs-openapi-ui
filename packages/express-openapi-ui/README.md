# Express-OpenAPI-UI Middleware

[![Version](https://img.shields.io/npm/v/@openapi-ui/express-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/express-openapi-ui)
[![Downloads](https://img.shields.io/npm/dm/@openapi-ui/express-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/express-openapi-ui)

## Install

```bash
npm install @openapi-ui/express-openapi-ui

pnpm install @openapi-ui/express-openapi-ui
```

## Usage

[Set up Express](https://expressjs.com/en/starter/hello-world.html) and pass an OpenAPI/Swagger spec to the `openApiUIReference` middleware:

> The most popular way is use [`swagger-jsdoc`](https://github.com/Surnet/swagger-jsdoc) to generate an OpenAPI/Swagger file.


```ts
import { openApiUIReference } from '@openapi-ui/express-openapi-ui';
import swaggerJsdoc from "swagger-jsdoc";

const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0",
    },
  },
  apis: ["./src/*.ts"], // files containing annotations as above
});

app.get('/openapi.json', (req, res) => {
  res.json(openApiSpec);
});

app.use(
  '/openapi',
  openApiUIReference({
    specPath: '/openapi.json',
  }),
);
```

[try example](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/examples/express-openapi-ui)

### Themes

```ts
import { openApiUIReference } from '@openapi-ui/express-openapi-ui';

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
    theme: 'light', // light or dark
  }),
);
```

### Custom CDN

You can use a custom CDN ，default is `https://unpkg.com/openapi-ui-dist`.

```ts
import { openApiUIReference } from '@openapi-ui/express-openapi-ui';

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
    cdn: 'https://registry.npmmirror.com/openapi-ui-dist/latest/files',
  }),
);
```
