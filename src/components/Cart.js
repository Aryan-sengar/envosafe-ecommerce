import React from 'react';

const Cart = ({ cart, removeFromCart, moveToWishlist, setView }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2 className="text-4xl mb-7 font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="flex items-center mb-4 border p-4 rounded-lg bg-green-100 bg-opacity-50 shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-24 h-24 object-cover rounded-lg border border-green-200 mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-700 font-bold">₹{product.price}</p>
              </div>
              <div className="flex-shrink-0 flex space-x-2">
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 font-bold hover:bg-[#e53e3e] shadow-lg transform transition-transform duration-150 hover:scale-110 ml-6"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 font-bold hover:bg-[#e53e3e] shadow-lg transform transition-transform duration-150 hover:scale-110 ml-6"
                  onClick={() => moveToWishlist(product)}
                >
                  Move to Wishlist
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
            <button 
              className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
              onClick={() => setView('checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
