import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { CartType } from "../components/Product";

type CartProps = {
    cart: CartType;
    onIncreaseClicked: (id: string) => void;
    onDecreaseClicked: (id: string) => void;
    onRemoveClicked: (id: string) => void;
    onBuyClicked: () => void;
};

const Cart = ({
    cart,
    onIncreaseClicked,
    onDecreaseClicked,
    onRemoveClicked,
    onBuyClicked,
}: CartProps) => (
    <div className="cart content">
        <Header title="Cart" />
        {cart[0] && (
            <>
                <ProductList
                    cart={cart}
                    onIncreaseClicked={onIncreaseClicked}
                    onDecreaseClicked={onDecreaseClicked}
                    onRemoveClicked={onRemoveClicked}
                />
                <div>
                    <button
                        onClick={() => {
                            alert("This is not a real store");
                            onBuyClicked();
                        }}
                    >
                        Buy
                    </button>
                </div>
            </>
        )}
    </div>
);

export default Cart;
