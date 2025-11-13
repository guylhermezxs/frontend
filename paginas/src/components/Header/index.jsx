import { Link, NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";

export default function Header () {
  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} alt="Logo da contabilidade" />
        <span>Contabilidade</span>
      </Link>

      <nav className='nav'>
        <NavLink to="/sobre-nos">Sobre nós</NavLink>
        <NavLink to="/fale-conosco">Fale conosco</NavLink>
      </nav>
    </header>
  );
};
