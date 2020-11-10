import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photos } from './photos.entity';

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photos)
        private photosRepository: Repository<Photos>,
    ) { }

    public async getAll(): Promise<Photos[]> {
        return this.photosRepository.find();
    }

    public async create(photos: Photos): Promise<Photos> {
        return this.photosRepository.save(photos);
    }


}



