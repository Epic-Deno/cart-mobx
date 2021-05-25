/*
 * @Description: products store
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-19 21:36:42
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-25 22:38:41
 */
import { observable, action } from 'mobx'
import * as shop from '../api/shop'

class ProductsStore {
    @observable all = [
        // { "id": 1, "title": "ipad 5 Mini", "price": 2650, "inventory": 2 },
        // { "id": 2, "title": "iphone 12", "price": 6799, "inventory": 10 },
        // { "id": 3, "title": "HUAWEI MateView 13.8", "price": 3999, "inventory": 5 },
    ];
    @observable foo = 'bar';

    constructor (rootStore) {
        this.rootStore = rootStore;//便于在当前的store拿到根节点
    }

    @action.bound getAllProducts () {
        shop.getAllProducts(products => {
            this.setAll(products)
        })
    }

    @action.bound setAll (products) {
        this.all = products
    };

    @action.bound decrementInventory (product) {
        const prod = this.all.find(item => item.id === product.id);
        
        prod.inventory--
        // prod.inventory <= 0 && (this.all = this.all.filter(res => res.id != prod.id));//直接删除商品
        // this.all.map(item => {
        //     if (item.id === product.id) {
        //         item.inventory--
        //     }
        // });
        // this.all=this.all.map(v=>v.id==product.id?{...v,inventory:v.inventory-1}:v)
       

    }
}

export default ProductsStore;