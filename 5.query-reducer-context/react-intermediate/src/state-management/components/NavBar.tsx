import { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';
import LoginStatusWithReactContext from '../login/LoginStatusWithReactContext';


const NavBar = () => {
  const { tasks } = useContext(TaskContext)
  console.log('Render NavBar');

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        { tasks.length}
      </span>
      <LoginStatusWithReactContext />
    </nav>
  );
};

export default NavBar;
