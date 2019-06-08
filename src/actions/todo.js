import { ADD_TASK, CHANGE_TASK, DELETE_TASK } from './types/todo';

export const addTask = taskName => {
  return {
    type: ADD_TASK,
    payload: {
      taskName,
      status: 0,
    },
  };
};

export const deleteTask = pos => {
  return {
    type: DELETE_TASK,
    payload: pos,
  };
};

export const changeTask = pos => {
  return {
    type: CHANGE_TASK,
    payload: pos,
  };
};
