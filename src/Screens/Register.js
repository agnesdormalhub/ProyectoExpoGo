import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/Styles'

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
            <View style= {styles.container}>
                <Text style={styles.titulo}> Iniciar Sesión </Text>
                <Text style={styles.textoIn}> Usuario </Text>
                <TextInput
                    style ={styles.input}
                    placeholder = 'Introducir email'
                    keyboardType = 'email-address'
                    onChangeText = { (text) => this.setState({email: text})} 
                />
                <Text style={styles.textoIn}> Contraseña </Text>
                <TextInput
                 style ={styles.input}
                 placeholder = 'Introducir contraseña'
                 secureTextEntry={true}
                 onChangeText = { (text) => this.setState({email: text})} 
             />

                
                <TouchableOpacity style = {styles.boton} onPress = {()=> this.enviar() }>
                    <Text style ={styles.botonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register;