import React from 'react';
import { FlatList, Text } from 'react-native';
import Item from '../Artes/item';
import { useWishlist } from '../Artes/WishlistContext';

const DesejosScreen = () => {
  const { produtos } = useWishlist();
  const wishlistItems = produtos.filter((item) => item.isInWishlist);

  return (
    <FlatList
      data={wishlistItems}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => <Text>Sua lista de desejos está vazia.</Text>}
    />
  );
};

export default DesejosScreen;