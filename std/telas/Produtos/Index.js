import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'

export default function Produto({topo, detalhes}){
    return <FlatList
                style={styles.background}
                renderItem={Item}
                ListHeaderComponent={()=> {
                  return <>
                    <Topo {...topo}/>
                    <View>
                      <Detalhes {...detalhes} />
                    </View>
                  </>
                }}
              />
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    color: "purple",
    fontWeight: "bold",
    marginLeft: 10,
  },
  background: {
    height: "100%",
    backgroundColor: "black",
  }

})