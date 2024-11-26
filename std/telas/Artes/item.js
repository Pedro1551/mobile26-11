import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image source={item.imagem} style={styles.image} />
      <Text style={styles.itemName}>{item.nome}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemName: {
    flex: 1,
  },
});

export default Item;