import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { db, auth } from "../Firebase/Config";
import {styles} from '../Styles/Styles'
import MyCamera from "../Components/MyCamera";

class CreatePosts extends Component{
    constructor(props){
        super();
        this.state = {
            title : '',
            description: "",
            showCamera:true,
            photo: ""
        }
    }

    createPost(){
        db.collection('posts').add({
            username: auth.currentUser.displayName,
            title: this.state.title,
            owner: auth.currentUser.email,
            description: this.state.description,
            createdAt: Date.now(),
            likes:[],
            comentarios: [],
            photo: this.state.photo
        })
        .then(response => {
            this.setState({
                title: '',
                description: '',

            });
            this.props.drawerProps.navigation.navigate('Home')
        })
        .catch(error =>{
            console.log(error)
        })
    }

onPhotoUpload(url){
    this.setState({
        photo: url,
        showCamera: false
    })
}



    render(){
        return( 
            <React.Fragment>
        {
             this.state.showCamera ? 
                <MyCamera onPhotoUpload={(url)=> this.onPhotoUpload(url)}/>
                :
                <View style= {styles.container}>
                <Text style={styles.titulo}> Publicacion </Text>
                <Text style={styles.textoIn}> Postear </Text>
                <TextInput
                    style ={styles.input}
                    placeholder = 'Introducir publicacion'
                    onChangeText = { (text) => this.setState({title: text})} 
                />
                <Text style={styles.textoIn}> Descripción</Text>
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
        }
            </React.Fragment>
        )
    }
}

export default CreatePosts;
