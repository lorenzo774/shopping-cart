import { ItemType } from "../data/items";
import { ProductType } from "./Product";

type ItemProps = {
    onAddClicked: (product: ProductType) => void;
    item: ItemType;
};

const Item = ({
    item: { id, name, description, price, img },
    onAddClicked,
}: ItemProps) => (
    <div
        className="list-item"
        key={id}
    >
        <p>
            $
            <b>
                <i>{price}</i>
            </b>
        </p>
        <h4>{name}</h4>
        <h5>{description}</h5>
        <img
            src={img}
            alt={description}
        />
        <button
            onClick={() =>
                onAddClicked({
                    item: { id, name, description, price, img },
                    quantity: 1,
                })
            }
        >
            Add
        </button>
    </div>
);

export default Item;
