import {useEstate, useEffect} from "react";
import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParans} from "react-router-dom"

const ItemDetailConteiner = () => {
    const [ products, setProducts] = useEstate(null)

    const {itemId} = useParans

    useEffect (() => {
        getProductById(itemId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}


export default ItemDetailConteiner 