import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../Styles/Styles'

class Post extends Component{
    constructor(){
        super();
        this.state = {
            post : '',
            userName: '',
            password: ''
        }
    }


    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.titulo}> Publicacion </Text>
                <Text style={styles.textoIn}> Postear </Text>
                <TextInput
                    style ={styles.input}
                    placeholder = 'Introducir publicacion'
                    keyboardType = 'multiline'
                    onChangeText = { (text) => this.setState({post: text})} 
                />
                <Text style={styles.textoIn}> Contraseña </Text>
                <TextInput
                 style ={styles.input}
                 placeholder = 'Introducir contraseña'
                 secureTextEntry={true}
                 onChangeText = { (text) => this.setState({password: text})} 
             />

                
                <TouchableOpacity style = {styles.boton} onPress = {()=> this.props.registrarse(this.state.email,this.state.password)}>
                    <Text style ={styles.botonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Post;