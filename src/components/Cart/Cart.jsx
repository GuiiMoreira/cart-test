import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'

export default function Cart({ data }) {
    return (
        <div className="container-cart">
            <p className='cart-title'>Meu carrinho</p>
            <div className='items-cart'>
                {data.items.map((item) => {
                    return (
                        <ItemCart item={item} />
                    )
                })}
            </div>
            <div className='cart-value-ship'>
                <div className='cart-totalValue'>
                    <p>Total</p>
                    <p>{(data.value / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>
                </div>
                {data.value > 1000 && <p className='txt-ship'>Parabéns, sua compra tem frete grátis</p>}
            </div>
            <div className='btn-buy'>
                <button>Finalizar Compra</button>
            </div>
        </div >
    )
}