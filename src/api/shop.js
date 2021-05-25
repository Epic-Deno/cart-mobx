/*
 * @Description: mock
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-19 22:19:42
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-25 23:42:12
 */
const _products = [
    { "id": 1, "title": "ipad 5 Mini", "price": 2650, "inventory": 2 },
    { "id": 2, "title": "iphone 12", "price": 6799, "inventory": 10 },
    { "id": 3, "title": "HUAWEI MateView 13.8", "price": 3999, "inventory": 5 },

]

export const getAllProducts = (callback) => {
    setTimeout(() => {
        callback(_products)
    }, 50)
}

export const buyProducts = (products, callback, errorCallback) => {
    setTimeout(() => { //随机触发成功还是失败
        Math.random() > 0.5 ? callback() : errorCallback();
    })
}