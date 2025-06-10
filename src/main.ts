// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- AÑADE ESTA LÍNEA AQUÍ ---
  // Esto permite que tu frontend en Vercel se comunique con tu backend
  app.enableCors();
  
  // Para ser más seguro en producción, puedes especificar el origen:
  // app.enableCors({
  //   origin: 'https://TU-APP-DE-ANGULAR.vercel.app', // Reemplaza con tu URL de Vercel
  // });

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Servidor NestJS corriendo en el puerto ${PORT}`);
}
bootstrap();