import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
        <ul className="nav">
            <li className="nav-item"><NavLink to={"/"} className={(e) => e.isActive ? "active" : ""}>Country Cities Dropdown</NavLink></li>
            <li className="nav-item"><NavLink to={"/useMemo"} className={(e) => e.isActive ? "active" : ""}>UseMemo</NavLink></li>
            <li className="nav-item"><NavLink to={"/products"} className={(e) => e.isActive ? "active" : ""}>Products</NavLink></li>
        </ul>      
    </div>
  )
}

export default Navbar;
