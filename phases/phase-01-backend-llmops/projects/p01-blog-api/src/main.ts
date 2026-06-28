import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodPipe } from 'zod';
import { ZodValidationException, ZodValidationPipe } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationPipe());
  const port = process.env.PORT || 3000;
  await app.listen( port, () => {console.log(`Your server is running on port: ${port}`)})
}
bootstrap();
