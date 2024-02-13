import LoginStatus from "../../auth/LoginState";
import useCounterStrore from "../../counter/store";



const NavBar = () => {

  const counter = useCounterStrore( s => s.counter/**bu functionni ichiga yozigan qiyamt shu qiymtga zontextni dependend qilib qoyaadi va qachin shu qiymat ozgargandagina componentni render qiladi */);

  console.log('Render NavBar');

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {counter}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
