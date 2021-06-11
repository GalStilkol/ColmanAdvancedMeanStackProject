import { Comment } from './comment.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'commentUserNameFilter'
})
// filter comments by content
export class CommentUserNameFilterPipe implements PipeTransform {
  transform(comments: Comment[], searchTerm: string): Comment[] {
    if (!comments || !searchTerm) {
      return comments;
    }
    return comments.filter(comment =>
      comment.userName.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }
}
