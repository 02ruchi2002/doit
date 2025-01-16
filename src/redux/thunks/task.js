import {
  fetchTaskListRequest,
  fetchTaskListSuccess,
  fetchTaskListFailure,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
  completeTaskRequest,
  completeTaskSuccess,
  completeTaskFailure,
  redoTaskRequest,
  redoTaskSuccess,
  redoTaskFailure,
} from "../creators/task";

// Thunk action creator
export const getTaskList = () => {
  return async (dispatch, getState) => {
    dispatch(fetchTaskListRequest());
    try {
      let alltask = JSON.parse(localStorage.getItem("tasks")); // mimics API call
      let copiedList;
      if (!alltask) {
        copiedList = {
          todo: [],
          completed: [],
        };
      } else {
        copiedList = { ...alltask };
      }
      dispatch(fetchTaskListSuccess(copiedList));
    } catch (error) {
      dispatch(fetchTaskListFailure("some error occured while fetching tasks"));
    }
  };
};

export const addTask = (task) => {
  return async (dispatch, getState) => {
    dispatch(addTaskRequest());
    try {
      const alltask = JSON.parse(localStorage.getItem("tasks"));
      let copiedTask;
      if (alltask) {
        copiedTask = {
          ...alltask,
        };
        copiedTask.todo.unshift(task);
      } else {
        copiedTask = {
          todo: [task],
          completed: [],
        };
      }

      localStorage.setItem("tasks", JSON.stringify(copiedTask)); // mimics API call
      dispatch(addTaskSuccess(copiedTask));
    } catch (error) {
      dispatch(addTaskFailure("Some error occured while adding task"));
    }
  };
};

export const deleteTask = (task, type) => {
  return async (dispatch, getState) => {
    dispatch(deleteTaskRequest());
    try {
      const alltask = JSON.parse(localStorage.getItem("tasks")); // mimics API call
      if (alltask) {
        let updatedList;
        if (type === "todo") {
          const filteredTodo = alltask.todo.filter((item) => item !== task);
          updatedList = {
            ...alltask,
            todo: filteredTodo,
          };

          localStorage.setItem("tasks", JSON.stringify(updatedList));
        } else {
          const filteredCompleted = alltask.completed.filter(
            (item) => item !== task
          );
          updatedList = {
            ...alltask,
            completed: filteredCompleted,
          };

          localStorage.setItem("tasks", JSON.stringify(updatedList));
        }
        dispatch(deleteTaskSuccess(updatedList));
      }
    } catch (error) {
      dispatch(deleteTaskFailure("Some error occured while deleting task"));
    }
  };
};

export const completeTodoTask = (task) => {
  return async (dispatch) => {
    dispatch(completeTaskRequest());
    try {
      const alltask = JSON.parse(localStorage.getItem("tasks"));
      const filteredTasks = alltask.todo.filter((item) => item !== task);
      const updatedTask = {
        todo: filteredTasks,
        completed: [task, ...alltask.completed],
      };
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
      dispatch(completeTaskSuccess(updatedTask));
    } catch (error) {
      dispatch(completeTaskFailure("Some error occured while completing task"));
    }
  };
};

export const redoCompletedTask = (task) => {
  return async (dispatch) => {
    dispatch(redoTaskRequest());
    try {
      const alltask = JSON.parse(localStorage.getItem("tasks"));
      const filteredTasks = alltask.completed.filter((item) => item !== task);
      const updatedTask = {
        completed: filteredTasks,
        todo: [task, ...alltask.todo],
      };
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
      dispatch(redoTaskSuccess(updatedTask));
    } catch (error) {
      dispatch(redoTaskFailure("Some error occured while completing task"));
    }
  };
};
