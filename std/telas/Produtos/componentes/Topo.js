import React from 'react';
import { StyleSheet, StatusBar, Image, Dimensions} from 'react-native';

import Header from './../../../../assets/desenho_1.1.png';
import Texto from '../../../componentes/Texto';



export default function Topo({titulo}) {
    return <>
        <StatusBar />
            <Image style={styles.imagem} source={Header} />
            <Texto style={styles.texto}>{titulo}</Texto>
            
    </>
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    texto: {
        width: "100%",
        fontSize: 25,
        position: "absolute",
        fontWeight: "bold",
        paddingTop: 250,
        paddingLeft: 5,
        
    },
    imagem: {
        width: "100%",
        height: 721/1024 * width,   
        backgroundColor: "lightgray", 
        
    },



imagem_2: {

    width: "28%",
    height: "15%",   
    backgroundColor: "lightgray",
    position: "absolute",
    paddingTop: 70,
    paddingLeft: 90,


},

});