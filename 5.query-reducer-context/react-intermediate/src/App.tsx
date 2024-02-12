
// import PostList from './react-query/PostList';
import TodoList from './react-query/TodoList';
import TodoForm from "./react-query/TodoForm";
import PostList from "./react-query/view-more-with-infiniteQuery/infiniteQueryPostList";

// state-management section
import Counter from './state-management/counter/Counter';
import TaskListUseState from './state-management/tasks/TaskListUseState';
import TaskListWithReducer from './state-management/tasks/TaskListWithReducer';
import LoginStatusWithUseState from './state-management/login/LoginStatusWithUseState';
import LoginStatusWithReducer from './state-management/login/LoginStatusWithReducer';
//react context
import TaskListWithReactContext from './state-management/contexts/TaskContext';
import { useReducer } from 'react';
import tasksReducer from './state-management/reducers/tasksReducer';
import TaskContext from './state-management/contexts/TaskContext';
import NavBar from './state-management/components/NavBar';
import HomePage from './state-management/components/HomePage';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/AuthContext';
import AuthProvider from './state-management/contexts/custom-context/AuthProvider';


const App = () => {

  const [tasks, taskDispatch] = useReducer(tasksReducer, []); //buni react context orqali boshqa filega yubormoqchi bolsak react conetdan foydalanamiz, dispatchni biz xoxlagandaqa nomlasak boladi
  const [user, authDispatch]=useReducer(authReducer,"")
  return (
    <>
      {/* todo list with select option */}
      {/* <TodoForm />
      <TodoList /> */}
      {/* postlist with  pagination */}
      {/* <PostList/> */}
      {/* postlis with view more button using infiniteQuery */}
      {/* <PostList/> */}

      

      {/* third section state-management */}
      {/* reducer */}
      {/* <Counter/> */}
      {/* <TaskListUseState/> */}
      {/* <TaskListWithReducer/> */}

      {/* <LoginStatusWithUseState/> */}
      {/* <LoginStatusWithReducer/> */}

      {/* react context */}
      {/* bu bizda react context bolib tasks dispatchni tashuvchi container boldi u orsb turgan barcha koponentga reducerlarni yubora olamiz */}
      {/* <AuthContext.Provider value={{user, dispatch:authDispatch}}>
      <TaskContext.Provider value={{ tasks, dispatch:taskDispatch }}>
        <NavBar />
        <HomePage/>
      </TaskContext.Provider>
      </AuthContext.Provider> */}

      {/* custom Provider ishlatish */}
      {/* here we can remove authReducer from app */}
      <AuthProvider >
      <TaskContext.Provider value={{ tasks, dispatch:taskDispatch }}>
        <NavBar />
        <HomePage/>
      </TaskContext.Provider>
      </AuthProvider>


    </>
  )
}

export default App