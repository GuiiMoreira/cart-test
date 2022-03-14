import './ItemCart.css'

export default function ItemCart({ item }) {
    return (
        <div className='item-cart'>
            <img src={item.imageUrl} alt="image-item" />
            <div className='info-item-cart'>
                <p className='item-name'>{item.name}</p>
                <p className='item-listPrice'>{(item.listPrice / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>
                <p className='item-sellingPrice'>{(item.sellingPrice / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </div>
    )
}