import { Post } from '../../model/index';

import {
  GET_REQUEST_POSTS,
  GET_SUCCESS_POSTS,
  GET_ERROR_POSTS
} from '../../constants';

import { IPostState } from '../../model'

const initialState: IPostState = {
  error: null,
  loading: false,
  posts: []
}

export const getPosts = (state: IPostState = initialState, action) => {


  switch (action.type) {
    case GET_REQUEST_POSTS:
      return {
        ...state,
        loading: true,
      }
    case GET_SUCCESS_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
      }
    case GET_ERROR_POSTS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default: 
    
    return state;
  }
  
}