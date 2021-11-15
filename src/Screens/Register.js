import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/Styles'

class Register extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            userName: '',
            password: '', 
            error: '',
        }
    }

   registrarse(){
   if(this.state.email == '' || this.state.userName == ''|| this.state.password == ''){
        alert("Falta completar un campo")
   }
   else{
    this.props.registrarse(this.state.email,this.state.password, this.state.userName)
   }
   
   }

  
    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.titulo}> Registrate </Text>
                <Text style={styles.textoIn}> Usuario </Text>
                <TextInput
                    style ={styles.input}
                    placeholder = 'Introducir nombre de usuario'
                    onChangeText = { (text) => this.setState({userName: text})} 
                />
                <Text style={styles.textoIn}> Mail </Text>
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

                
                <TouchableOpacity style = {styles.boton} onPress = {()=> this.registrarse()}>
                    <Text style ={styles.botonText}>Enviar</Text>
                </TouchableOpacity>

                
                {
                    this.props.error ? (
                        <Text> Error: {this.props.error}</Text>
                    ) : null
                    
                }
            </View>
        )
    }
}

export default Register;