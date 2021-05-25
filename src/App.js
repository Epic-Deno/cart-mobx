/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-05-18 23:20:38
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-05-18 23:44:13
 */
import Products from './components/products'
import Cart from './components/cart'

function App() {
  return (
    <div>
      <h1>Shopping Cart example</h1>
      <hr/>
      <Products />
      <hr/>
      <Cart />
    </div>
  );
}

export default App;
