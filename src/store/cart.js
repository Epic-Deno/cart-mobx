/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-19 21:36:48
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-25 23:47:35
 */
import { observable, action, computed } from 'mobx'
import * as shop from '../api/shop';
class CartStore {
    // 「 id: 商品id, quantity: 购物车商品数量 」
    @observable items = [];
    
    @observable checkoutStatus = null;

    @action.bound addToCart (product) {
        // console.log('addToCart =>', product['id'], this.items)
        //1. 判断购物车数量是否已经有该商品
        //如果有，则让购物车中的商品数量+1
        //如果没有，则添加新的商品到购物车中
        const prod = this.items.find(cartItem => cartItem.id === product.id);
        //找到一样的数量就加1
        if (prod) { //购物车存在目标商品
            prod.quantity++;
        } else { //购物车没有就把这个参数加到购物车的数组中
            this.items.push({
                id: product['id'],
                quantity: 1,
            });

        }
        //添加购物车之后，列表库存 -1
        this.rootStore.productsStore.decrementInventory(product)
        
    }

    @computed get cartProducts () {
        const { productsStore } = this.rootStore
        return this.items.map(cartItem => {
           const prod = productsStore['all'].find(prodItem => prodItem.id === cartItem.id);
        //    if (prod) {
               return {
                   id: prod['id'],
                   price: prod['price'],
                   title: prod['title'],
                   quantity: cartItem['quantity'],//当前添加的数量
               }
        //    }
        })
    }
    
    @computed get totalPrice () {
       // reduce 一个参数是用来累加的 第二个是每个Item, 接受一个函数， 第二个参数是初始值
        return this.cartProducts.reduce((total, prod) => {
            return total + prod.price * prod.quantity;
        }, 0)
    }

    //结算
    @action.bound checkout (products) {
        //备份购物车数据
        const savedProducts = [...products];
        //清空结算状态
        this.setCheckoutStatus(null);
        //清空购物车
        this.setItems([]);
        //发起结算请求
        // 如果成功： 将结算状态设置成successful
        // 如果发起失败： 将结算状态设置为 failed, 还原购物车数据
        shop.buyProducts(
            products,//结算的商品数据
            () => { //成功状态
                this.setCheckoutStatus('successful');
            },
            () => { //失败状态
                this.setCheckoutStatus('failed');
                this.setItems(savedProducts);//失败还原数据
            }
        )
    };

    @action.bound setCheckoutStatus (status) {
        this.checkoutStatus = status;
    }

    @action.bound setItems (items) {
        this.items = items
    }
    constructor (rootStore) {
        this.rootStore = rootStore;//便于在当前的store拿到根节点
    }
}

export default CartStore;