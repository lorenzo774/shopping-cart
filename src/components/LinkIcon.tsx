import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

type LinkIconProps = {
    icon: any;
    to: string;
};

const LinkIcon = ({ icon, to }: LinkIconProps) => (
    <NavLink
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
        to={to}
    >
        <FontAwesomeIcon icon={icon} />
    </NavLink>
);
export default LinkIcon;
