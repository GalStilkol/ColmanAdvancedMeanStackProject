import { Post } from './post.model';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'postEstimatedTimeFilter'
})

export class PostEstimatedTimeFilterPipe implements PipeTransform {
  transform(posts: Post[], searchTerm: string): Post[] {
    if (!posts || !searchTerm) {
      return posts;
    }
    return posts.filter(post =>
      post.estimatedTime.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }
}
