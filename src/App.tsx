import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shopping from "./pages/Shopping";
import { CartType, ProductType } from "./components/Product";
import "./scss/app.scss";

const App = () => {
    const [cart, setCart] = useState([] as CartType);

    const addProduct = (product: ProductType) =>
        setCart((prev) => {
            const found = prev.find((p) => p.item.id === product.item.id);
            if (found) {
                return prev.map((p) => {
                    if (product.item.id === p.item.id) {
                        const updatedProduct = {
                            ...p,
                            quantity: p.quantity + 1,
                        };
                        return updatedProduct;
                    }
                    return p;
                });
            }
            return [...prev, product];
        });

    const increaseProduct = (id: string) =>
        setCart((prev) =>
            prev.map((p) => {
                if (p.item.id === id) {
                    const updatedProduct = {
                        ...p,
                        quantity: p.quantity + 1,
                    };
                    return updatedProduct;
                }
                return p;
            })
        );
    const decreaseProduct = (id: string) =>
        setCart((prev) =>
            prev.map((p) => {
                if (p.item.id === id && p.quantity >= 2) {
                    const updatedProduct = {
                        ...p,
                        quantity: p.quantity - 1,
                    };
                    return updatedProduct;
                }
                return p;
            })
        );

    const removeProduct = (id: string) => {
        setCart((prev) => prev.filter((prod) => prod.item.id !== id));
    };

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/shop"
                    element={<Shopping onAddClicked={addProduct} />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            onIncreaseClicked={increaseProduct}
                            onDecreaseClicked={decreaseProduct}
                            onRemoveClicked={removeProduct}
                            onBuyClicked={() => setCart([])}
                        />
                    }
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
