import React from 'react';

const Popup = ({ message }) => {
  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50">
      {message}
    </div>
  );
};

export default Popup;
