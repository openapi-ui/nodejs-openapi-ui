# Nestjs-OpenAPI-UI Middleware

[![Version](https://img.shields.io/npm/v/%40openapi-ui/nestjs-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/nestjs-openapi-ui)
[![Downloads](https://img.shields.io/npm/dm/%40openapi-ui/nestjs-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/nestjs-openapi-ui)
[![License](https://img.shields.io/npm/l/%40openapi-ui/nestjs-openapi-ui)](https://www.npmjs.com/package/@openapi-ui/nestjs-openapi-ui)

## Install

```bash
npm install @openapi-ui/nestjs-openapi-ui
```

## Usage

[Set up NestJS](https://docs.nestjs.com/first-steps) and [set up NestJS Swagger](https://docs.nestjs.com/openapi/introduction) and pass an OpenAPI/Swagger spec to the `apiReference` middleware:

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
    cdn: 'https://unpkg.com/openapi-ui-dist',
  }),
)
```
