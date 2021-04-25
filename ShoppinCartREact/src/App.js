import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [carts, setCart] = useState([
    { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
  ])
   
   const [item,setItem ] = useState(0);
  

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cart = [...carts];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...carts[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const item = getItemCount(cart);
    // state'i güncelle
    setCart(cart);
    setItem(item)
  };

  const handleDecrement = (product) => {
    const cart = [...carts];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const item = getItemCount(cart);
    setCart(cart);
    setItem(item)
  };

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  
    return (
      <div className="App">
        <Navbar totalItems={item} />
        <ProductsGrid
          products={products}
          cart={carts}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
  }


export default App;
