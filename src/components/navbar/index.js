import { memo } from "react";
import "./style.css";
import { translations } from "../../translations";
import { Link } from "react-router-dom";

function Navbar({lang}) {
  return (
      <nav className='Navbar'>
        <ul className='Navbar-list'>
          <li className='Navbar-item'>
            <Link className='Navbar-link' to={'/app'}>{translations[lang].home}</Link>
          </li>
        </ul>
      </nav>
  );
}

export default memo(Navbar);
