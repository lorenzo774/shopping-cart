import { getItems } from "../data/items";
import { ProductType } from "./Product";
import Item from "./Item";

type ItemListProps = {
    onAddClicked: (product: ProductType) => void;
};

const ItemList = ({ onAddClicked }: ItemListProps) => (
    <div className="list">
        {getItems().map((item) => (
            <Item
                item={item}
                onAddClicked={onAddClicked}
            />
        ))}
    </div>
);

export default ItemList;
