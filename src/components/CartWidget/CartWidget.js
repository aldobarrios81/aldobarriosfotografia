

import './CartWidget.css'
import cart from '../images/cart.svg';
const CartWidget = () => {
    
    return  (
        <div>
           <a href='/'>  <img src={cart} className='cartwidget' alt="cart-widget"/></a>
          <p>5</p> 
        </div>

    )
}

export default CartWidget