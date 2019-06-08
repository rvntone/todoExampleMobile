import { ADD_TASK, DELETE_TASK, CHANGE_TASK } from '../actions/types/todo';

const initialState = [
  {
    taskName: 'task 1 task 1 task 1 task 1 ',
    status: 0,
  },
  {
    taskName: 'task 2',
    status: 1,
  },
  {
    taskName: 'task 3',
    status: 2,
  },
];
export default (state = [...initialState], action) => {
  if (action === undefined || action.type === undefined) {
    return [...initialState];
  }
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }
    case DELETE_TASK: {
      const pos = action.payload;
      const newState = [...state];
      return [...newState.slice(0, pos), ...newState.slice(pos + 1)];
    }
    case CHANGE_TASK: {
      const pos = action.payload;
      const newState = [...state];
      const task = { ...newState[pos] };
      task.status++;
      task.status = task.status >= 3 ? 0 : task.status;
      newState[pos] = task;
      return newState;
    }
    default:
      return state;
  }
};
