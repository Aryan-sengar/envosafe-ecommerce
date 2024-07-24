import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Checkout</h2>
      <div>
        <h3 className="text-lg mb-2">Select Payment Method:</h3>
        <div className="mb-4">
          <label className="block mb-2">
            <input 
              type="radio" 
              value="creditCard" 
              checked={paymentMethod === 'creditCard'} 
              onChange={handlePaymentMethodChange} 
            />
            Credit Card
          </label>
          <label className="block mb-2">
            <input 
              type="radio" 
              value="debitCard" 
              checked={paymentMethod === 'debitCard'} 
              onChange={handlePaymentMethodChange} 
            />
            Debit Card
          </label>
          <label className="block mb-2">
            <input 
              type="radio" 
              value="upi" 
              checked={paymentMethod === 'upi'} 
              onChange={handlePaymentMethodChange} 
            />
            UPI
          </label>
          <label className="block mb-2">
            <input 
              type="radio" 
              value="cod" 
              checked={paymentMethod === 'cod'} 
              onChange={handlePaymentMethodChange} 
            />
            Cash on Delivery
          </label>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
