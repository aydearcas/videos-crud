import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideosService } from './videos.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';
import { DeleteResult } from 'typeorm';

@Resolver((of) => Video)
export class VideosResolver {
  constructor(private videosService: VideosService) {}

  @Mutation((returns) => Video)
  create(
    @Args('createVideoInput') createVideoInput: CreateVideoInput,
  ): Promise<Video> {
    return this.videosService.createVideo(createVideoInput);
  }

  @Query((returns) => [Video])
  findAll(): Promise<Video[]> {
    return this.videosService.findAllVideos();
  }

  @Query((returns) => Video)
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Video> {
    return this.videosService.findOneVideo(id);
  }

  @Mutation((returns) => Video)
  update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateVideoInput') updateVideoInput: UpdateVideoInput,
  ) {
    return this.videosService.updateVideo(id, updateVideoInput); // Esta dando un problemma aqui al hacer la query en graphql
  }

  @Mutation((returns) => Video)
  delete(@Args('id', { type: () => Int }) id: number): Promise<DeleteResult> {
    return this.videosService.deleteVideo(id);
  }
}
