import { FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

// GET POSTS WORKED
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}


export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error);
  }
}

// LIKE POST WORKED
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const dislikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.dislikePost(id);

    dispatch({ type: DISLIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE WORKED
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};