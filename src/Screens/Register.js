import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            userName: '',
            password: ''
        }
    }
    enviar(){
        console.log(`El email que se coloco es: ${this.state.email} `);
    }
    render(){
        return(
            <View>
                <Text>Registro de usuarios</Text>
                <TextInput
                    
                    placeholder = 'Introducir email'
                    keyboardType = 'email-address'
                    onChangeText = { (text) => this.setState({email: text})} 
                />
                
                <TouchableOpacity  onPress = {() => this.enviar ()  }>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register;