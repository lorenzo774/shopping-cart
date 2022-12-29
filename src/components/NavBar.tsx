import {
    faCartShopping,
    faHome,
    faShop,
} from "@fortawesome/free-solid-svg-icons";
import LinkIcon from "./LinkIcon";

const NavBar = () => (
    <nav>
        <LinkIcon
            to="/"
            icon={faHome}
        />
        <LinkIcon
            to="/shop"
            icon={faShop}
        />
        <LinkIcon
            to="/cart"
            icon={faCartShopping}
        />
    </nav>
);

export default NavBar;
