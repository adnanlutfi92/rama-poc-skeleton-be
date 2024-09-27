/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { LOGGER } from './core/constants';
import { BEARER_TOKEN_NAME } from './common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // global prefix
  // app.setGlobalPrefix('api/');

  const isEnable = process.env.ENABLE_SWAGGER || false;
  if (isEnable) {
    const config = new DocumentBuilder()
      .setTitle('API Example')
      .setDescription('Lorem API description')
      .addBearerAuth(undefined, BEARER_TOKEN_NAME)
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }

  const port = process.env.PORT || 8000;

  await app.listen(port);
  LOGGER.log('Application running on port ' + port);
}
bootstrap();
