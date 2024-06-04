# NodeJS-OpenAPI-UI

A middleware collection for using the [OpenAPI-UI](https://github.com/rookie-luochao/openapi-ui) with NodeJS

## List of Contents

- List of Contents
- [Usage](#Usage)
  - [NestJS](#nestjs)
  - [Express](#express)
  - [Hono](#hono)
- [License](#license)

## Usage

### NestJS
```ts
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { openApiUIReference } from "@openapi-ui/nestjs-openapi-ui";

const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build()

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup("swagger", app, document, {
  jsonDocumentUrl: "/openapi.json",
});

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
  }),
);
```

Read more: [@openapi-ui/nestjs-openapi-ui](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/packages/nestjs-openapi-ui)

### Express
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

Read more: [@openapi-ui/express-openapi-ui](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/packages/express-openapi-ui)

### Hono
```ts
import { openApiUIReference } from '@openapi-ui/hono-openapi-ui';

app.doc('/openapi.json', {
  info: {
    title: 'Example API',
    description: 'Example API description',
    version: '1.0.0',
  },
  openapi: '3.0.0',
});

app.use(
  '/openapi',
  openApiUIReference({
    specPath: '/openapi.json',
  }),
);
```

Read more: [@openapi-ui/hono-openapi-ui](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/packages/hono-openapi-ui)

## License
[MIT](https://github.com/openapi-ui/nodejs-openapi-ui/blob/main/LICENSE)