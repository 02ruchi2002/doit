import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  COMPLETE_TASK_FAILURE,
  COMPLETE_TASK_REQUEST,
  COMPLETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  REDO_TASK_FAILURE,
  REDO_TASK_REQUEST,
  REDO_TASK_SUCCESS,
} from "../creators/task";
import {
  FETCH_TASK_LIST_REQUEST,
  FETCH_TASK_LIST_SUCCESS,
  FETCH_TASK_LIST_FAILURE,
} from "../creators/task";

// reducers.js
const initialState = {
  data: {
    todo: [],
    completed: [],
  },
  isLoading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // handling fetch task action dispatched
    case FETCH_TASK_LIST_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TASK_LIST_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case FETCH_TASK_LIST_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    // handling add task action dispatched
    case ADD_TASK_REQUEST:
      return { ...state, isLoading: true };
    case ADD_TASK_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case ADD_TASK_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    // handling delete task action dispatched
    case DELETE_TASK_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_TASK_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case DELETE_TASK_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    // handling complete task action dispatched
    case COMPLETE_TASK_REQUEST:
      return { ...state, isLoading: true };
    case COMPLETE_TASK_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case COMPLETE_TASK_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    // handling redo task action dispatched
    case REDO_TASK_REQUEST:
      return { ...state, isLoading: true };
    case REDO_TASK_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case REDO_TASK_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default taskReducer;
