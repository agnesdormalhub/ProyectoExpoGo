import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/Styles'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            userName: '',
            password: '',
        }
    }
    registrarse(email,password){
        alert(email + "-" + password);
    }
 
    ingresar(email,password){
        alert(email + "-" + password);
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
                 onChangeText = { (text) => this.setState({password: text})} 
             />

                
                <TouchableOpacity style = {styles.boton} onPress = {()=> this.props.ingresar(this.state.email,this.state.password)}>
                    <Text style ={styles.botonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login;