import Product, { CartType } from "./Product";

type ProductListProps = {
    cart: CartType;
    onRemoveClicked: (id: string) => void;
    onIncreaseClicked: (id: string) => void;
    onDecreaseClicked: (id: string) => void;
};

const ProductList = ({
    cart,
    onRemoveClicked,
    onDecreaseClicked,
    onIncreaseClicked,
}: ProductListProps) => {
    return (
        <div className="list">
            {cart.map((product) => (
                <Product
                    product={product}
                    onDecreaseClicked={onDecreaseClicked}
                    onIncreaseClicked={onIncreaseClicked}
                    onRemoveClicked={onRemoveClicked}
                />
            ))}
        </div>
    );
};

export default ProductList;
