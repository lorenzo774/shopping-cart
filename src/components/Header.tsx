import NavBar from "./NavBar";

type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps) => (
    <header>
        <div></div>
        <h2>{title}</h2>
        <NavBar />
    </header>
);

export default Header;
