# Express-OpenAPI-UI Middleware

[![Version](https://img.shields.io/npm/v/%40openapi-ui/express-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/express-openapi-ui)
[![Downloads](https://img.shields.io/npm/dm/%40openapi-ui/express-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/express-openapi-ui)
[![License](https://img.shields.io/npm/l/%40openapi-ui/express-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/express-openapi-ui)

## Install

```bash
npm install @openapi-ui/express-openapi-ui
```

## Usage

[Set up Express](https://expressjs.com/en/starter/hello-world.html) and pass an OpenAPI/Swagger spec to the `openApiUIReference` middleware:

> The most popular way is use [`swagger-jsdoc`](https://github.com/Surnet/swagger-jsdoc) to generate an OpenAPI/Swagger file.


```ts
import { openApiUIReference } from '@openapi-ui/express-openapi-ui'

app.get('/openapi.json', (req, res) => {
  res.json(openApiSpec)
})

app.use(
  '/openapi',
  openApiUIReference({
    specPath: '/openapi.json',
  }),
)
```

[try example](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/examples/express-openapi-ui)

### Themes

```ts
import { openApiUIReference } from '@openapi-ui/nestjs-openapi-ui'

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
    theme: 'light', // light or dark
  }),
)
```

### Custom CDN

You can use a custom CDN ，default is `https://unpkg.com/openapi-ui-dist`.

```ts
import { openApiUIReference } from '@openapi-ui/nestjs-openapi-ui'

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
    cdn: 'https://registry.npmmirror.com/openapi-ui-dist/latest/files',
  }),
)
```
