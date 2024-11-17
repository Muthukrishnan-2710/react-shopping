import React, { useState } from 'react';
import './App.css';

// Example product data with images
const productsData = [
  { 
    id: 1, 
    name: 'Laptop', 
    description: 'High-performance laptop with great specs', 
    price: 40000, 
    image: 'https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG'  // Example image URL
  },
  { 
    id: 2, 
    name: 'Smartphone', 
    description: 'Latest smartphone with great features', 
    price: 18000, 
    image: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/smartphone-2048px-1013.jpg'  // Example image URL
  },
  { 
    id: 3, 
    name: 'Headphones', 
    description: 'Noise-cancelling headphones', 
    price: 2000, 
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363'  // Example image URL
  },
  {
    id: 4,
    name: 'Air conditioner',
    description: 'fast colling techology',
    price: 30000,
    image: 'https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/global/images-for-blog/history-of-air-conditioner-pc.jpg'
  },
  {
    id: 5,
    name: 'Refrigerator',
    description: 'fresh morning',
    price: 34000,
    image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/8880caca-b465-4dff-943c-47138677581a23171023_416x416.jpg'
  },
  {
    id: 6,
    name: 'Cycles',
    description: 'fit your booy',
    price: 10000,
    image: 'https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw4bda727a/Products/NewAttitude/BlueGreen/1.png?sh=523&sfrm=png'
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState(productsData);

  // Helper function to toggle item in cart
  const toggleCartItem = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (itemIndex >= 0) {
        // Item is in the cart, remove it
        const updatedCart = [...prevCart];
        updatedCart.splice(itemIndex, 1);
        return updatedCart;
      } else {
        // Item is not in the cart, add it
        return [...prevCart, product];
      }
    });
  };

  // Calculate total value of items in the cart
  const totalValue = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <div className="content">
        {/* Product List */}
        <div className="product-list">
          {products.map(product => {
            const isInCart = cart.some(item => item.id === product.id);
            return (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button 
                  onClick={() => toggleCartItem(product)}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Cart on the right side */}
        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} className="cart-item-image" />
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
          )}
          <p><strong>Total: ${totalValue}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;
