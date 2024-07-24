import React from 'react';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlist.map(product => (
            <div key={product.id} className="flex justify-between items-center p-2 border-b">
              <div>
                <h3 className="text-lg">{product.name}</h3>
                <p>₹{product.price}</p>
              </div>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
