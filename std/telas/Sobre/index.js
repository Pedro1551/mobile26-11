import React from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";

import Texto from '../../componentes/Texto';
import Styles from './estilos';


export default function Index({textos}){
    return <ScrollView style={Styles.sobre}>
    <Image source={textos.logo} style={Styles.logo} resizeMode="contain"></Image>
    <View style={{backgroundColor: 'black' }}><Texto></Texto></View>
    <View style={{backgroundColor: 'black' }}><Texto></Texto></View>
    <Texto style={Styles.titulo}>{textos.titulo}</Texto>
    <View style={{backgroundColor: 'black' }}><Texto></Texto></View>
    <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
    <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>
</ScrollView>

}

