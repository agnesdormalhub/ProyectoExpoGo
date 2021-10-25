import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';


export default function Profile (props){
    return(
        <View>
            <Text>Profile</Text>
            <Text>{props.user}</Text>
            <TouchableOpacity
                onPress={()=> props.signOut() }
                >
                    <Text> Cerrar Sesion.</Text>
            </TouchableOpacity>
        </View>
    )
}