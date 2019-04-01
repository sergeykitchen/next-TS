import { IPostState } from './index';
import { Post } from './index';

export interface State {
  posts: IPostState;
  post: Post;
}
