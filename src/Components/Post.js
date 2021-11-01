import React, {Component} from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { styles} from "../Styles/Styles";
import firebase from "firebase";
import { db, auth } from "../Firebase/Config";

class Post extends Component{
    constructor(props){
        super();
        this.state = {
            likes: 0,
            liked: false,
            comentario: ""
        }
    }

comentar(){
    let comentarios= db.collection("posts").doc(this.props.info.id);
    comentarios.update({ 
        comentarios: firebase.firestore.FieldValue.arrayUnion({owner:auth.currentUser.displayName,comment: this.state.comentario })
    })
}


darLike(){
    let usuariosLikeados= db.collection("posts").doc(this.props.info.id);
    usuariosLikeados.update({ 
        likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
    })
    .then(()=> {
        this.setState({
            liked:true });
    })
    .catch((error)=>{
        console.error("Error updating document: " , error);
    });
}
unLike(){
    let usuariosLikeados= db.collection("posts").doc(this.props.info.id);
    usuariosLikeados.update({ 
        likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
    })
    .then(()=> {
        this.setState({
            liked:false });
    })
    .catch((error)=>{
        console.error("Error updating document: " , error);
    });
}
componentDidMount(){
    if(this.props.info.data.likes.includes(auth.currentUser.email)){
        this.setState({liked: true})
    }
}
    render(){
        console.log(this.props)
     return(

        <View style ={styles.publi}>
            <Text> {this.props.info.data.username} </Text>
            <Text> {this.props.info.data.title} </Text>
            <Text> {this.props.info.data.description} </Text>
            { this.state.liked == true?
          <TouchableOpacity style = {styles.boton} onPress = {()=> this.unLike() }>
          <Text style ={styles.botonText}>Unlike</Text>
      </TouchableOpacity>
      : 
  
      <TouchableOpacity style = {styles.boton} onPress = {()=> this.darLike() }>
      <Text style ={styles.botonText}>Like</Text>
  </TouchableOpacity>
    }
    <Text style={styles.textoIn}> Comentarios: </Text>
    <TextInput
    placeholder = 'Introducir Comentarios'
    keyboardType= 'multiline'
    onChangeText = { (text) => this.setState({comentario: text})} 
    />
<TouchableOpacity style = {styles.boton} onPress = {()=> this.comentar() }>
      <Text style ={styles.botonText}>Comentar</Text>
  </TouchableOpacity>
        </View>
    )
    }
}
export default Post;