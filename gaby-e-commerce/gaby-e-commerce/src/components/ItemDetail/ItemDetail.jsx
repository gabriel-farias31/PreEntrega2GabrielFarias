import ItemCount from '../itemCount/'

const ItemDetail = ({ id, name, price, stock }) => {
    return (
        <article className='cardItem'>
            <header className='header'>
                <h2 className='Itemheader'>
                    {name}
                </h2>
            </header>
            <section >
                <p className='Info'>
                    precio: ${price}
                </p>
                <p className='Info'>
                    stock disponible: {stock}
                </p>
            </section>
            <footer className='Itemfooter'>
                <buttom className='Option'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada' , quantity)}/>
                </buttom>

            </footer>
        </article>
    )
}