export interface IRequestAction {
  type: string,
};

export interface IResultAction<T> {
  type: string,
  payload: T
};
