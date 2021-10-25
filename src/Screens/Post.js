import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { db, auth } from "../Firebase/Config";
import {styles} from '../Styles/Styles'

class Post extends Component{
    constructor(props){
        super();
        this.state = {
            title : '',
            description: ""
        }
    }

    createPost(){
        db.collection('posts').add({
            username: auth.currentUser.displayName,
            title: this.state.title,
            description: this.state.description,
            createdAt: Date.now()
        })
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render(){
        return( 

            <View style= {styles.container}>
                <Text style={styles.titulo}> Publicacion </Text>
                <Text style={styles.textoIn}> Postear </Text>
                <TextInput
                    style ={styles.input}
                    placeholder = 'Introducir publicacion'
                    onChangeText = { (text) => this.setState({title: text})} 
                />
                <Text style={styles.textoIn}> Contraseña </Text>
                <TextInput
                 style ={styles.input}
                 placeholder = 'Introducir descripción'
                 keyboardType= 'multiline'
                 onChangeText = { (text) => this.setState({description: text})} 
             />
                
                <TouchableOpacity style = {styles.boton} onPress = {()=> this.createPost()}>
                    <Text style ={styles.botonText}>Crear</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Post;