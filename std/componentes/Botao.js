import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";

import Texto from './Texto'


export default function Botao({onPress, textoBotao, style}){

      return <TouchableOpacity style={[style, styles.botao]} onPress={onPress}>
            <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
        </TouchableOpacity>
    
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "white",
        paddingVertical: 16,
        borderRadius: 6,
        backgroundColor: "red",
    },
    botaoTexto: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        lineHeight: 20,
        fontWeight: "bold",
     
    },

});

