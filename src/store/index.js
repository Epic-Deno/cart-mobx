/*
 * @Description: 主的store
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-19 21:36:54
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-19 21:56:10
 */
import ProductsStore from './products';
import CartStore from './cart'

class RootStore {
    constructor () {
        //把root store 传递到子容器里面这样每个子容器才可以拿到
        this.productsStore = new ProductsStore(this);
        this.cartStore = new CartStore(this);
    }
}

export default RootStore;