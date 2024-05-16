# NodeJS-OpenAPI-UI

A middleware collection for using the [OpenAPI-UI](https://github.com/rookie-luochao/openapi-ui) with NodeJS

## List of Contents

- List of Contents
- [Usage](#Usage)
  - [NestJS](#nestjs)
- [License](#license)

## Usage

### NestJS
```ts
import { openApiUIReference } from "@openapi-ui/nestjs-openapi-ui"

app.use(
  "/openapi",
  openApiUIReference({
    specPath: "/openapi.json",
  }),
)
```

Read more: [@openapi-ui/nestjs-openapi-ui](https://github.com/openapi-ui/nodejs-openapi-ui/tree/main/packages/nestjs-openapi-ui)

## License
[MIT](https://github.com/openapi-ui/nodejs-openapi-ui/blob/main/LICENSE)