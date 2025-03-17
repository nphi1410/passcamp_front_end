import React, { useEffect, useState } from "react";
import {getCart, getCartItems, addToCart, removeFromCart } from "../services/CartService";

const Cart = () => {
  const cartId = getCart(localStorage.getItem("user").accountId); // Replace with dynamic cart ID
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items when component loads
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setLoading(true);
    const items = await getCartItems(cartId);
    setCartItems(items);
    setLoading(false);
  };

  const handleAddItem = async () => {
    const newItem = {
      cartId: cartId,
      productId: "p56789",
      quantity: 1,
    };
    await addToCart(newItem);
    fetchCartItems(); // Refresh cart after adding
  };

  const handleRemoveItem = async (cartItemId) => {
    await removeFromCart(cartItemId);
    fetchCartItems(); // Refresh cart after removing
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

      {loading ? (
        <p>Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-3 border-b">
              <span>{item.productName} - {item.quantity}</span>
              <button 
                onClick={() => handleRemoveItem(item.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <button 
        onClick={handleAddItem} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </div>
  );
};

export default Cart;
