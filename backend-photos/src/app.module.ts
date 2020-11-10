import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config'
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
