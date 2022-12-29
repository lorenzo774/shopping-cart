import {
    faCartShopping,
    faHome,
    faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <Link to="/">
            <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/shop">
            <FontAwesomeIcon icon={faShop} />
        </Link>
        <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
        </Link>
    </nav>
);

export default NavBar;
