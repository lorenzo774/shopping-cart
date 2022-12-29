import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HoodiesShowcase from "../components/HoodiesShowcase";

const Home = () => {
    const [showHoodies, setShowHoodies] = useState(false);

    useEffect(() => {
        setShowHoodies((_) => innerWidth > 1700);
        window.addEventListener("resize", () => {
            setShowHoodies((_) => innerWidth > 1700);
        });
    }, []);

    return (
        <div className="content home">
            <div className="title">
                <h1>Cheap hoodies store</h1>
            </div>
            {showHoodies && <HoodiesShowcase />}
            <Link
                className="link-btn"
                to="/shop"
            >
                <p>Go shopping</p>
            </Link>
        </div>
    );
};

export default Home;
