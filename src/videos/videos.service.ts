import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { Video } from './entities/video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video) private videosRepository: Repository<Video>,
  ) {}

  async create(createVideoInput: CreateVideoInput): Promise<Video> {
    const newVideo = this.videosRepository.create(createVideoInput); // newVideo = new Video(); newVideo.title = 'whatever title'
    return this.videosRepository.save(newVideo); // insert
  }

  async findAll(): Promise<Video[]> {
    return this.videosRepository.find(); // SELECT * video
  }

  /*findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoInput: UpdateVideoInput) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }*/
}
