import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://match-three-steel.vercel.app/'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 8080, '0.0.0.0');
}
bootstrap();
