import React, { createContext, useState, useContext } from 'react';
import artes from '../../mocks/artes';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([...artes.itens.lista]);

  const toggleWishlist = (itemId) => {
    setProdutos(produtos.map((item) =>
      item.id === itemId ? { ...item, isInWishlist: !item.isInWishlist } : item
    ));
  };

  return (
    <WishlistContext.Provider value={{ produtos, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
