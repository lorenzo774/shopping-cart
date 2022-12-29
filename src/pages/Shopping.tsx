import Header from "../components/Header";
import ItemList from "../components/ItemList";
import { ProductType } from "../components/Product";

type ShoppingProps = {
    onAddClicked: (product: ProductType) => void;
};

const Shopping = ({ onAddClicked }: ShoppingProps) => {
    return (
        <div className="content shopping">
            <Header title="Shop" />
            <main>
                <div>
                    <ItemList onAddClicked={onAddClicked} />
                </div>
            </main>
        </div>
    );
};

export default Shopping;
