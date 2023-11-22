import { Fragment, useEffect } from "react"
import {useState, useEffect } from "react"
import {getProducts } from "../../asyncMock"
import ItemList from '../ItemList'
import {useParans} from "react-routet-dom"


const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParans()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)

        })
        .catch(error => {
            console.error(error)
        })

    }, [])

 return (
    <Fragment>
        <h1> {greeting} </h1>
        <ItemList products={products}/>

    </Fragment>
 )
}
export default ItemListConteiner