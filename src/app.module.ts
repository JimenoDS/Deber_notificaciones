import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
imports: [
   TypeOrmModule.forRoot({
      type: 'postgres',
      url: '//${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:5432/${{PGDATABASE}}',
      port: 5432,
      username: 'postgres',
      password: '${{POSTGRES_PASSWORD}}',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true, 
    }),
  NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
