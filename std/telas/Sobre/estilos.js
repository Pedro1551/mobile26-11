
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        backgroundColor: "red",
        marginTop: 10,
       
        paddingVertical: 20,
        borderRadius: 16,
        flex: 1,
        
        
    },
    
    sobre:{
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    textoSobre: {
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 20,
        color: "black",
        textAlign: "justify",
        backgroundColor: "lightgray",
        flex: 1,
        paddingVertical: 20,
        borderRadius: 16,
        margin: 20,
       marginTop: 40, 
       padding: 20,
       fontWeight: "bold",
      marginRight: 30,

      
        // Altura total do container
        // Adiciona 20px de espaço dentro das bordas
       
    },

    titulo:{
    color: "black",
    backgroundColor: "red",
  paddingVertical: 9,
  borderRadius: 16,
    paddingHorizontal: 125,
    fontSize: 20,
    lineHeight: 40,

    fontWeight: "bold",
    
   
  
    }
})

export default styles;