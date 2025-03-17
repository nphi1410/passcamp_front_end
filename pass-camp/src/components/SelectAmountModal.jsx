import React, { useState } from "react";

const SelectAmountModal = ({ isOpen, onClose, onConfirm, product , availableAmount}) => {
  const [amount, setAmount] = useState(1);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        {/* Product Details */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="text-left">
            <h2 className="text-lg font-semibold">{product.itemName}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Quantity Input */}
        <label className="block text-gray-700 font-medium mb-1">
          Select Quantity:
        </label>
        <input
          type="number"
          min="1"
          max={availableAmount}
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full border rounded p-2 text-center"
        />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onConfirm(amount)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition w-1/2 mr-2"
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg shadow hover:bg-gray-400 transition w-1/2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAmountModal;
