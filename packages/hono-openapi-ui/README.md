# Hono-OpenAPI-UI Middleware

[![Version](https://img.shields.io/npm/v/%40openapi-ui/hono-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/hono-openapi-ui)
[![Downloads](https://img.shields.io/npm/dm/%40openapi-ui/hono-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/hono-openapi-ui)
[![License](https://img.shields.io/npm/l/%40scalar%2Fhono-api-reference)](https://www.npmjs.com/package/@openapi-ui/hono-openapi-ui)

## Install

```bash
npm install @openapi-ui/hono-openapi-ui
```

## Usage

Set up [Zod OpenAPI Hono](https://github.com/honojs/middleware/tree/main/packages/zod-openapi) and pass an OpenAPI/Swagger spec to the `openApiUIReference` middleware:

```ts
import { openApiUIReference } from '@openapi-ui/hono-openapi-ui'

app.doc('/openapi.json', {
  info: {
    title: 'Example API',
    description: 'Example API description',
    version: '1.0.0',
  },
  openapi: '3.0.0',
})

app.use(
  '/openapi',
  openApiUIReference({
    specPath: '/openapi.json',
  }),
)
```

[try example](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/examples/hono-openapi-ui)

### Themes

```ts
import { openApiUIReference } from '@openapi-ui/hono-openapi-ui'

app.use(
  '/openapi',
  openApiUIReference({
    specPath: '/openapi.json',
    theme: 'light', // light or dark
  }),
)
```

### Custom CDN

You can use a custom CDN ，default is `https://unpkg.com/openapi-ui-dist`.

```ts
import { openApiUIReference } from '@openapi-ui/hono-openapi-ui'

app.use(
  '/openapi',
  openApiUIReference({
    specPath: "/openapi.json",
    cdn: 'https://registry.npmmirror.com/openapi-ui-dist/latest/files',
  }),
)
```
