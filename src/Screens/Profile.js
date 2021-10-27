import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/Styles'


export default function Profile (props){
    return(
        <View style= {styles.container}>
            <Text style={styles.titulo}>Profile</Text>
            <Text style={styles.textoIn}>{props.user}</Text>
            <TouchableOpacity
                style = {styles.boton}
                onPress={()=> props.signOut() }
                >
                    <Text style ={styles.botonText}> Cerrar Sesion.</Text>
            </TouchableOpacity>
        </View>
    )
}