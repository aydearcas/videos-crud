import { Injectable } from '@nestjs/common';
import { Int } from '@nestjs/graphql';
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

  async createVideo(createVideoInput: CreateVideoInput): Promise<Video> {
    const newVideo = this.videosRepository.create(createVideoInput); // newVideo = new Video(); newVideo.title = 'whatever title'
    return this.videosRepository.save(newVideo); // insert
  }

  async findAllVideos(): Promise<Video[]> {
    return this.videosRepository.find(); // SELECT * video
  }

  async findOneVideo(id: number): Promise<Video> {
    return this.videosRepository.findOne(id);
  }

  async updateVideo(id: number, updateVideoInput: UpdateVideoInput) {
    return this.videosRepository.update(id, updateVideoInput);
  }

  async deleteVideo(id: number) {
    return this.videosRepository.delete(id);
  }
}
