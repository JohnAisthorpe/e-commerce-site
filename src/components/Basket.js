import { render } from "@testing-library/react";
import Item from "./Item";

const Basket = ({basket}) => {

    const renderItem = basket.map(product => {
        return (<Item product={product} key={product.model}></Item>)
    })
    console.log(basket)

    return (
        <div>
        this is items list
            {renderItem}
        </div>
    );
}

export default Basket;