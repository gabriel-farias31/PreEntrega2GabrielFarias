const products = [
    {
        Id: "1",
        name:"nokia 1100",
        Price: 1000,
        category:"celular",
        stock:40,
        description:'descripcion del celular'
    },
    {id:'2', name:'samsung 67', price:'4000', category:'celular', stock:48, description:'descripcion del samsung',}

    ,{id:'3', name:'samsung 33', price:'3000', category:'celular', stock:50, description:'descripcion del samsung',},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeOut(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}