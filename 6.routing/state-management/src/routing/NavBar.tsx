import { Link, NavLink } from 'react-router-dom';
//Link bilan Navlinkni faqri Navlink tanlangan linkga actice classni qoshib

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link" style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
