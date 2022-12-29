import { ItemType } from "../data/items";

export type ProductType = {
    item: ItemType;
    quantity: number;
};

export type CartType = ProductType[];

type ProductProps = {
    product: ProductType;
    onRemoveClicked: (id: string) => void;
    onIncreaseClicked: (id: string) => void;
    onDecreaseClicked: (id: string) => void;
};

const Product = ({
    product: {
        item: { id, name, price, img },
        quantity,
    },
    onIncreaseClicked,
    onDecreaseClicked,
    onRemoveClicked,
}: ProductProps) => (
    <div
        key={id}
        className="list-item"
    >
        <p>
            $
            <b>
                <i>{price}</i>
            </b>
        </p>
        <h5>{name}</h5>
        <img src={img} />
        <h4>x {quantity}</h4>
        <div className="quantity-handler">
            <button
                onClick={() => onIncreaseClicked(id)}
                className="increase"
            >
                +1
            </button>
            <button
                onClick={() => onDecreaseClicked(id)}
                className="decrease"
            >
                -1
            </button>
        </div>
        <button onClick={() => onRemoveClicked(id)}>Remove</button>
    </div>
);

export default Product;
