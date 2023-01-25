const Item = ({product, addToBasket}) => {

    const renderButton = () => {
        if (addToBasket){
            return (<button onClick={() => addToBasket(product)} value = "add-to-basket"></button>)
        }
        else{
            console.log(product.name)
        }
    }

    return (
        <div>
            <p>
                {product.name}
            </p>
            <p>
                £{product.price}
            </p>
            <p>
                {product.model}
            </p>
            {renderButton()}
        </div>
    )
}

export default Item;