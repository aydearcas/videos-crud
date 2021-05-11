import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideosService } from './videos.service';
import { Video } from './entities/video.entity';
import { CreateVideoInput } from './dto/create-video.input';
import { UpdateVideoInput } from './dto/update-video.input';

@Resolver((of) => Video)
export class VideosResolver {
  constructor(private videosService: VideosService) {}

  @Mutation((returns) => Video)
  createVideo(
    @Args('createVideoInput') createVideoInput: CreateVideoInput,
  ): Promise<Video> {
    return this.videosService.create(createVideoInput);
  }

  @Query((returns) => [Video])
  findAll(): Promise<Video[]> {
    return this.videosService.findAll();
  }

  /* @Query(() => Video, { name: 'video' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.videosService.findOne(id);
  }

  @Mutation(() => Video)
  updateVideo(@Args('updateVideoInput') updateVideoInput: UpdateVideoInput) {
    return this.videosService.update(updateVideoInput.id, updateVideoInput);
  }

  @Mutation(() => Video)
  removeVideo(@Args('id', { type: () => Int }) id: number) {
    return this.videosService.remove(id);
  }*/
}