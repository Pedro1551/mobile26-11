import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';
import artes from '../../mocks/artes';
import Item from './item';
import { useWishlist } from './WishlistContext';

const ArtesScreen = () => {
  const { produtos, toggleWishlist } = useWishlist();

  return (
    <FlatList
      data={produtos}
      renderItem={({ item }) => (
          <Item item={item} onPress={() => toggleWishlist(item.id)} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ArtesScreen;