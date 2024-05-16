import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { openApiUIReference } from '@openapi-ui/nestjs-openapi-ui';
import { AppModule } from './app.module';

const PORT = Number(process.env.PORT) || 8002;
const HOST = process.env.HOST || '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const docsPath = '/openapi';
  const specPath = '/openapi.json';

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: specPath,
  });

  app.use(
    docsPath,
    openApiUIReference({
      title: 'openapi docs',
      description: 'openapi docs description',
      specPath: specPath,
      withFastify: true,
      theme: 'dark',
    }),
  );

  await app.listen(PORT, HOST, () => {
    console.log(`✅ NestJS listening at http://127.0.0.1:${PORT}${docsPath}`);
  });
}
bootstrap();
