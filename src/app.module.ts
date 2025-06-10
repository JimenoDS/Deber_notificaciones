import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';

@Module({
 imports: [
 ConfigModule.forRoot({
 isGlobal: true,
 }),
 TypeOrmModule.forRoot({
 type: 'postgres',
 url: process.env.DATABASE_URL,
 port: 5432,
 username: 'postgres',
 password: 'cyxcHIHIcoqmJANNMiFpoelpfKdNtuaV',
 database: 'railway',
 autoLoadEntities: true,
 synchronize: true,
 }),
 NotificationsModule,
 ],
 controllers: [AppController],
 providers: [AppService],
})


export class AppModule {}
