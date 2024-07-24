import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Popup from './components/Popup';
import Checkout from './components/Checkout';
import img from "./components/p1.png"

const productsData = [
  { id: 1, name: 'Alpinia Purpurata - Red Ginger Plant', price: 10, image: 'https://www.plantsguru.com/image/cache/New%20Plants/pg-red-ginger-800x800.jpg', description: 'Live plant along with Plastic pot. plants height with pot is 9 inch and pot size is 5in diameter. Foliage plant useful for shrubs, table top & gifts' },
  { id: 2, name: 'Areca Palm', price: 350, image: 'https://www.plantsguru.com/image/cache/catalog/Palm/pg-areca-palm-800x800.jpg', description: 'Plants height with pot approximatily 2 feet and pot size is 5 inches. its Non Flowering plant and recommended by NASA for air purifying. plant can survive indoor and outdoor condition. plant can grow arround the year' },
  { id: 3, name: 'Aglaonema Red Plant', price: 200, image: 'https://www.plantsguru.com/image/cache/avenue-tree/Aglaonema-red-800x800.png', description: ' Live plant along with plastic pot. plants height with pot is 1.5 feet and pot size is 5 icnhes diameter. plants nature is indoor/semi shade, less watering Recommended by NASAs air purifying study. Best foliage plants, useful for table top and gift plants.' },
  { id: 4, name: 'Sansevieria Green, Snake Plant', price: 40, image: 'https://www.plantsguru.com/image/cache/catalog/Cacti/pg-sansevieria-green-800x800.jpg', description: ' Live plant along with plastic pot plants height with pot is 10-12 inches and pot size is between 3-5 inches diameter. plants nature is indoor/semi shade, less watering Recommended by NASAs air purifying study. Best foliage plants, useful for table top and gift plants.' },
  { id: 5, name: 'Tulsi-Seeds(500gm) ', price: 1600, image: 'https://www.plantsguru.com/image/cache/data/medicinal%20seeds/plantsguru-medicinalseeds-Tulsi-Seeds-800x800.jpg', description: 'Tulsi plant seeds 500gm.' },
  { id: 6, name: 'Adenium obesum', price: 600, image: 'https://www.plantsguru.com/image/cache/catalog/Desertrose/pg-adenium-phet-mong-kon-800x800.jpg', description: 'Live plant along with plastic pot.  plants height with pot is 1.5 feet and pot size is 5 inch diameter . plants nature is outdoor/semi shade & less watering. plants nature is outdoor/semi shade & less watering.' },
  { id: 7, name: 'All Time Mango', price: 300, image: 'https://www.plantsguru.com/image/cache/data/Fruit%20Plants/plantsguru-fruitplants-mango-hapus-800x800.jpg', description: 'Plants height with pot is 1.5 to 2.5 feet and pot size is 5 inches dia. Grafted plant, starts fruiting in 2 - 3 years' },
  { id: 8, name: 'Poinsettia Red Plant', price: 499, image: 'https://www.plantsguru.com/image/cache/catalog/Anthurium/pg-pinsettia-red-800x800.jpg', description: ' Live plant along with plastic pot plants height with pot is 1.5 feet and pot size is 5 icnhes diameter. plants nature is indoor-semishade.' },
  { id: 9, name: 'Poinsettia Pink ', price: 499, image: 'https://www.plantsguru.com/image/cache/catalog/Anthurium/pg-pinsettia-pink-800x800.png', description: 'Live plant along with plastic pot plants height with pot is 1.5 feet and pot size is 5 icnhes diameter. plants nature is indoor-semishade.' }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [view, setView] = useState('products');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    showPopupMessage('Product added to cart');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    showPopupMessage('Product added to wishlist');
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(product => product.id !== productId));
  };

  const moveToWishlist = (product) => {
    removeFromCart(product.id);
    addToWishlist(product);
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showPopup && <Popup message={popupMessage} />}
      <main className="flex-grow container mx-auto p-4 relative">
        <div className="absolute top-0 right-0 flex space-x-4 mt-4 mr-4 z-50">
          <button className="bg-[#43A047] text-black px-4 py-2 rounded font-bold hover:bg-[#e53e3e] shadow-lg transform transition-transform duration-150 hover:scale-110" onClick={() => setView('products')}>
            Products
          </button>
          <button className="bg-[#43A047] text-black px-4 py-2 rounded font-bold hover:bg-[#e53e3e] shadow-lg transform transition-transform duration-150 hover:scale-110 relative" onClick={() => setView('cart')}>
            Cart
            {cart.length > 0 && <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-500 text-white text-center rounded-full">{cart.length}</span>}
          </button>
          <button className="bg-[#43A047] text-black px-4 py-2 rounded font-bold hover:bg-[#e53e3e] shadow-lg transform transition-transform duration-150 hover:scale-110 relative" onClick={() => setView('wishlist')}>
            Wishlist
            {wishlist.length > 0 && <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-500 text-white text-center rounded-full">{wishlist.length}</span>}
          </button>
        </div>
        {view === 'products' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto mt-20">
            {productsData.map(product => (
              <Product 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
                addToWishlist={addToWishlist} 
              />
            ))}
          </div>
        )}
        {view === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} moveToWishlist={moveToWishlist} setView={setView} />}
        {view === 'wishlist' && <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />}
        {view === 'checkout' && <Checkout cart={cart} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
