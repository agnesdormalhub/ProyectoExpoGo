import React, {Component, Fragment} from "react";
import {View, FlatList, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import { styles} from "../Styles/Styles";
import firebase from "firebase";
import { db, auth } from "../Firebase/Config";

class Post extends Component{
    constructor(props){
        super();
        this.state = {
            likes: 0,
            liked: false,
            comentario: "",
            mostrarComentarios: true,

        }
    }

comentar(){
    let comentarios= db.collection("posts").doc(this.props.info.id);
    comentarios.update({ 
        comentarios: firebase.firestore.FieldValue.arrayUnion({owner:auth.currentUser.displayName, email:auth.currentUser.displayName, comment: this.state.comentario, createdAt: Date.now(), id:Date.now() })
    })
}

borrar(){
 this.props.borrar(this.props.info.data.createdAt)
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
        console.log(this.props.info.data)
        
     return(

        <View style ={styles.publi}>
            <Text style = {styles.perfil}> Username: </Text>
            <Text style = {styles.textoIn}> {this.props.info.data.username} </Text>
            <Text style = {styles.perfil}> Título: </Text>
            <Text> {this.props.info.data.title} </Text>
            <Text style = {styles.perfil}> Descripción: </Text>
            <Text> {this.props.info.data.description} </Text>
            <Image source = {{uri: this.props.info.data.photo}} style= {styles.img} />
            { this.state.liked == true?
          <TouchableOpacity style = {styles.boton} onPress = {()=> this.unLike() }>
          <Text style ={styles.botonText}>Unlike</Text>
      </TouchableOpacity>
      : 
  
      <TouchableOpacity style = {styles.boton} onPress = {()=> this.darLike() }>
      <Text style ={styles.botonText}>Like</Text>
  </TouchableOpacity>
    }
       
    { this.state.mostrarComentarios ?
    <React.Fragment>

        <Text style={styles.textoIn}> Comentarios: </Text>
        <FlatList 
                      
                        data={this.props.info.data.comentarios}
                        keyExtractor={(item)=> item.id.toString()}
                        renderItem={({item})=> <Text>{item.owner} {item.comment}</Text>}
                    />
        <TextInput
        placeholder = 'Introducir Comentarios'
        keyboardType= 'multiline'
        onChangeText = { (text) => this.setState({comentario: text})} 
        />
    <TouchableOpacity style = {styles.boton} onPress = {()=> this.comentar() }>
          <Text style ={styles.botonText}>Comentar</Text>
      </TouchableOpacity>
      </React.Fragment>
      :
<TouchableOpacity  onPress = {()=> this.setState({mostrarComentario: true})}>
      <Text>Ver Comentarios</Text>
  </TouchableOpacity>
    }
    { auth.currentUser.displayName == this.props.info.data.username ?
      <TouchableOpacity style = {styles.boton} onPress = {()=> this.borrar() }>
      <Text style ={styles.botonText}>Borrar Publicación</Text>
  </TouchableOpacity>
    :
    null
    }
   
     </View>
     )}
}
export default Post;