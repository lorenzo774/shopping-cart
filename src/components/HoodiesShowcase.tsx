import { getItems } from "../data/items";

const HoodiesShowcase = () => (
    <div className="list">
        {getItems().map(({ img, description }) => (
            <img
                src={img}
                alt={description}
                className="list-item"
            />
        ))}
    </div>
);

export default HoodiesShowcase;
