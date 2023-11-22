


const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }


    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>

            <div className='Controls'>
                <buttom className="Buttom" onClick={decrement}>-</buttom>
                <h3 className='Number'>{quantity}</h3>
                <buttom className="Buttom" onClick={increment}>+</buttom>
            </div>
            <div>
                <buttom className="Buttom" onClick={() => onAdd(quantity)} disabled={!stock}>
                    agregar al carrito
                </buttom>
            </div>
            
             </div>
    )



}