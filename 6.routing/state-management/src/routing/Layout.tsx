import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import "../../public/css/index.css"

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        {/* child component uchun place holder nested routelarda ishlatilinadi boshqa pagedan shu page bir nechta si kelishi mumkin  */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
