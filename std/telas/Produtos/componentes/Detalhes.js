import React from 'react';
import {StyleSheet, View, Dimensions, Image, Alert} from 'react-native';


import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';
import logo from '../../../../assets/logo_dg.png'

export default function Detalhes({nome, informacao, preco, botao}) {

    
    return <View style={styles.container}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>
            </View>
            <Texto style={styles.texto}>{informacao}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao textoBotao={botao} onPress={()=>{Alert.alert("Em breve!", "Aguarde, jovem padawan.")}}/>
        </View>
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
    },
    nome: {
        color: "black",
        fontSize: 26,
        fontWeight: "bold",
        paddingTop: 30,
        paddingLeft: 8,
        
      },
    texto: {
        color: 'black',
        //top: -640,
        backgroundColor: "lightgray",
        fontWeight: "bold",

        marginTop: 10,
       
        paddingVertical: 20,
        borderRadius: 16,
        padding: 15,
        
    },
    preco: {
        color: "red",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 8,
        
        
        
      },
    logo: {
        width: 80,
        height: 100,
        
        
    },
    logotipo: {
        flexDirection: "row",
        backgroundColor: "lightgray",
    },
    
})





        
        
        
        
    



