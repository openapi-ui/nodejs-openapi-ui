# NestJS-OpenAPI-UI Middleware

[![Version](https://img.shields.io/npm/v/@openapi-ui/nestjs-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/nestjs-openapi-ui)
[![Downloads](https://img.shields.io/npm/dm/@openapi-ui/nestjs-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/nestjs-openapi-ui)

## Install

```bash
npm install @openapi-ui/nestjs-openapi-ui

pnpm install @openapi-ui/nestjs-openapi-ui
```

## Usage

[Set up NestJS](https://docs.nestjs.com/first-steps) and [set up NestJS Swagger](https://docs.nestjs.com/openapi/introduction) and pass an OpenAPI/Swagger spec to the `openApiUIReference` middleware:

```ts
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { openApiUIReference } from "@openapi-ui/nestjs-openapi-ui"

const app = await NestFactory.create(AppModule)

const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build()

const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup("swagger", app, document, {
		jsonDocumentUrl: "/openapi.json",
	});

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
  }),
)
```

[try example](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/examples/nestjs-openapi-ui-express)

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
