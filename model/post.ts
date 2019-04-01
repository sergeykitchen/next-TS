export interface Post {
  id: number;
}

export interface IPostState {
  error: null | string;
  loading: boolean;
  posts: Post[];
}