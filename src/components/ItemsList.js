import { render } from "@testing-library/react";
import Item from "./Item";

const ItemsList = ({allProducts, addToBasket}) => {

    const renderItem = allProducts.map(product => {
        return (<Item product={product} key={product.model} addToBasket={addToBasket}></Item>)
    })

    return (
        <div>
        this is items list
            {renderItem}
        </div>
    );
}

export default ItemsList;