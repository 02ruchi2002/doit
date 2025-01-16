// Action types
export const FETCH_TASK_LIST_REQUEST = "FETCH_TASK_LIST_REQUEST";
export const FETCH_TASK_LIST_SUCCESS = "FETCH_TASK_LIST_SUCCESS";
export const FETCH_TASK_LIST_FAILURE = "FETCH_TASK_LIST_FAILURE";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const COMPLETE_TASK_REQUEST = "COMPLETE_TASK_REQUEST";
export const COMPLETE_TASK_SUCCESS = "COMPLETE_TASK_SUCCESS";
export const COMPLETE_TASK_FAILURE = "COMPLETE_TASK_FAILURE";

export const REDO_TASK_REQUEST = "REDO_TASK_REQUEST";
export const REDO_TASK_SUCCESS = "REDO_TASK_SUCCESS";
export const REDO_TASK_FAILURE = "REDO_TASK_FAILURE";

// Action creators is a function that returns an object to be dipatched that contains type of action and payload
export const fetchTaskListRequest = (payload) => ({
  type: FETCH_TASK_LIST_REQUEST,
  payload,
});
export const fetchTaskListSuccess = (payload) => ({
  type: FETCH_TASK_LIST_SUCCESS,
  payload,
});

export const fetchTaskListFailure = (error) => ({
  type: FETCH_TASK_LIST_FAILURE,
  payload: error,
});

export const addTaskRequest = (payload) => ({
  type: ADD_TASK_REQUEST,
  payload,
});

export const addTaskSuccess = (payload) => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskFailure = (payload) => ({
  type: ADD_TASK_FAILURE,
  payload,
});
export const deleteTaskRequest = (payload) => ({
  type: DELETE_TASK_REQUEST,
  payload,
});

export const deleteTaskSuccess = (payload) => ({
  type: DELETE_TASK_SUCCESS,
  payload,
});

export const deleteTaskFailure = (payload) => ({
  type: DELETE_TASK_FAILURE,
  payload,
});

export const completeTaskRequest = (payload) => ({
  type: COMPLETE_TASK_REQUEST,
  payload,
});

export const completeTaskSuccess = (payload) => ({
  type: COMPLETE_TASK_SUCCESS,
  payload,
});

export const completeTaskFailure = (payload) => ({
  type: COMPLETE_TASK_FAILURE,
  payload,
});

export const redoTaskRequest = (payload) => ({
  type: REDO_TASK_REQUEST,
  payload,
});

export const redoTaskSuccess = (payload) => ({
  type: REDO_TASK_SUCCESS,
  payload,
});

export const redoTaskFailure = (payload) => ({
  type: REDO_TASK_FAILURE,
  payload,
});
