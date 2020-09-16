import * as c from './ActionTypes.js';

export const addBoard = (board) => {
  const { name, description, id } = board;
  return {
    type: c.ADD_BOARD,
    name: name,
    description: description,
    id: id
  }
}

export const deleteBoard = id => ({
  type: c.DELETE_BOARD,
  id
})

export const addPost = (post) => {
  const { title, body, date, upvotes, id } = post;
  return {
    type: c.ADD_POST,
    title: title,
    body: body,
    date: date,
    upvotes: upvotes,
    id: id
  }
}

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
})

export const upvotePost = (post) => {
  const { title, body, date, upvotes, id } = post;
  return {
    type: c.UPVOTE_POST,
    title: title,
    body: body,
    date: date,
    upvotes: upvotes,
    id: id
  }
}

export const downvotePost = (post) => {
  const { title, body, date, upvotes, id } = post;
  return {
    type: c.DOWNVOTE_POST,
    title: title,
    body: body,
    date: date,
    upvotes: upvotes,
    id: id
  }
}
