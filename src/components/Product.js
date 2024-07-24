import React, { useState } from 'react';

const Product = ({ product, addToCart, addToWishlist }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border p-4 text-center relative bg-[#A5D6A7] bg-opacity-50 rounded-lg shadow-lg">
      <div 
        className="relative"
        onMouseEnter={toggleDetails}
        onMouseLeave={toggleDetails}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-50 object-cover mb-2 rounded-lg border border-green-200"
        />
        {showDetails && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-75 text-white p-4 rounded-lg">
            <p className="text-Times New Roman">{product.description}</p>
            <p className="text-black font-bold">₹{product.price}</p>
          </div>
        )}
      </div>
      <h3 className="text-Times New Roman font-semibold mb-1">{product.name}</h3>
      <p className="text-black mb-6 font-bold">₹{product.price}</p>
      <button 
        className="bg-[#C1E899] text-black px-4 py-2 rounded font-bold hover:bg-[#66BB6A] shadow-lg transform transition-transform duration-150 hover:scale-110 ml-6"
        onClick={() => addToCart(product)} 
      >
        Add to Cart
      </button>
      <button 
        className="bg-[#00E676] text-black px-4 py-2 rounded font-bold hover:bg-[#43A047] shadow-lg transform transition-transform duration-150 hover:scale-110 ml-6"
        onClick={() => addToWishlist(product)}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Product;
