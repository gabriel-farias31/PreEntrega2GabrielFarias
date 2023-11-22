import './Item.css'

const Item =({ id, name, price, stock}) => {
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
    <Link to={`/item/${id}`} className='Option'>ver detalle</Link>
</buttom>

            </footer>
        </article>
    )
}