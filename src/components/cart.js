/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-18 23:38:53
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-25 23:20:15
 */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject('productsStore', 'cartStore')
@observer

class Cart extends Component {
    
    render() {
        const { cartStore } = this.props;
        return (
            <div>
                <h2>Cart</h2>
                <ul>
                    {
                        cartStore.cartProducts.map(item => (
                            <li key={ item.id }>
                                { item['title'] } - { item['price'] } * { item['quantity'] }
                                <br/>
                            </li>
                        ))
                    }
                   
                </ul>
                <p>Total: { cartStore['totalPrice'] }</p>
                <p>
                    <button 
                        disabled={!cartStore.cartProducts.length}
                        onClick={ () => cartStore.checkout(cartStore.cartProducts) }
                    >Checkout</button>
                </p>
                { cartStore.checkoutStatus && <p>Checkout { cartStore.checkoutStatus }</p> }
               
            </div>
        );
    }
}

export default Cart;