import Api from '../../API';
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {
  GET_REQUEST_POSTS,
  GET_SUCCESS_POSTS,
  GET_ERROR_POSTS
} from '../../constants';

import { IRequestAction, IResultAction, Post } from '../../model/index';

const getRequest: ActionCreator<Action> = () => ({
  type: GET_REQUEST_POSTS,
});

const getSuccess: ActionCreator<Action> = (res: [])=> ({
  type: GET_SUCCESS_POSTS,
  payload: res,
})

const getError: ActionCreator<Action> = (message: string) => ({
  type: GET_ERROR_POSTS,
  payload: message,
})

export const fetchData: Function = (show: string): Function => async dispatch => {
  dispatch(getRequest());
  try {
    const res = await Api.getList(show);
    console.log(res);
  } catch(err) {
    dispatch(getError(err.message));
  }
}