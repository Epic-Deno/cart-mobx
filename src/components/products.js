/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-18 23:38:41
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-25 22:27:27
 */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


//inject是吧根容器中的元素映射到子元素中
@inject('productsStore', 'cartStore')
@observer
class products extends Component {
   
    render() {
        // cartStore
        const { productsStore, cartStore } = this.props;
        
        return (
            <div>
                <h2>Products</h2>
               <ul>
               {
                    productsStore['all'].map(item => (
                        <li  key={ item['id'] }>
                            { item['title'] } - { item['price'] } * { item['inventory'] }
                            <br/>
                            <button 
                                onClick={ () => cartStore.addToCart(item) }
                                disabled={ !item['inventory'] }
                            >{ !item['inventory']? 'Sold out' : 'Add to cart' }</button>
                        </li>
                    ))
                }
               </ul>
            </div>
        );
    }
    //加入购物车
    AddToMyCart(item) {
        // console.log(item)
        this.props.cartStore.addToCart(item)
    }
    componentDidMount () {
        this.props.productsStore.getAllProducts();//加载所有的商品
    } 
}

export default products;