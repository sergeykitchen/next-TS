import { combineReducers } from 'redux';
import { State } from '../../model/index';
import { getPost } from './post';
import {getPosts} from './posts';

export default combineReducers<State>({
  getPosts,
});
