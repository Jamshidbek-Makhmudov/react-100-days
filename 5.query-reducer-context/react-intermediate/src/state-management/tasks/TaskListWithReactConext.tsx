import { useContext, useReducer, useState } from 'react';
import tasksReducer from '../reducers/tasksReducer';
import TaskContext from '../contexts/TaskContext';
import AuthContext from '../contexts/AuthContext';

const TaskListWithReactConext = () => {
    // const context = useContext(TaskContext);
  const { tasks, dispatch } = useContext(TaskContext); //child componentlarda react ciontextni shunaqlib ishklatamiz, endi cotext boxga teng bolib uni ichda hamma narsamiz bor ichida olib ishlataveramiz
  const {user} = useContext(AuthContext)
  


  

  

  return (
    <>
      <h1>user: { user ? user: "guest"}</h1>

      <button
        onClick={() =>
          dispatch({ type: "ADD", task: { id: Date.now(), title: 'Task ' + Date.now() } })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({type:"Remove", taskId:task.id})
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListWithReactConext;