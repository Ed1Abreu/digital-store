import './CardProducts.css'

const CardProducts = (props) => {
    
    const {title, price, old_price,coin, dir, alt} = props

    return(
        <div className='container'>
            <div className='product'>
                <div className='image'>
                    <img className='product-image' src={dir} alt={alt} />
                </div>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='detail'>
                <p className='old_price'>{coin}{old_price}</p>
                <p className='price'>{coin}{price}</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default CardProducts