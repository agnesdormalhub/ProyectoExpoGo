import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {styles} from '../Styles/Styles'
import {auth, db } from "../Firebase/Config";
import Post from "../Components/Post";

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            myPosts: [],
            loading: true
            
        }
    
    }

componentDidMount(){
    db.collection("posts").where("owner", "==", auth.currentUser.email).orderBy("createdAt","desc").onSnapshot((docs) => {
        let posts = []
        docs.forEach((doc)=>{
            posts.push({
                id: doc.id,
                data: doc.data()
            });
        })
        this.setState({
            myPosts: posts,
            loading: false
        })
    })

}

borrar(createdAt){
    db.collection('posts').where('createdAt', '==', createdAt ).get()
    .then(data => {
        data.forEach(doc => doc.ref.delete())
        const postsFiltered = this.state.myPosts.filter(post => post.data.createdAt != createdAt)
        console.log(this.state.myPosts)
        this.setState({myPosts: postsFiltered});
    })
}


render(){
    return(
        <View style= {styles.container}>
            <Text style={styles.titulo}>Profile</Text>
            <Text style={styles.perfil}>Mail:</Text>
            <Text style={styles.textoIn}>{auth.currentUser.email}</Text>
            <Text style={styles.perfil}>Username:</Text>
            <Text style={styles.textoIn}>{auth.currentUser.displayName}</Text>
            <Text style={styles.perfil}>Last Sign In:</Text>
            <Text style={styles.textoIn}>{auth.currentUser.metadata.lastSignInTime}</Text>
            <Text style={styles.perfil}>Cantidad de posteos realizados:</Text>
            <Text style={styles.textoIn}>{this.state.myPosts.length}</Text>

            <Text style={styles.perfil}>Mis posteos:</Text>
          
            <FlatList  style ={styles.flat}
                      
                        data={this.state.myPosts}
                        keyExtractor={(item)=> item.id.toString()}
                        renderItem={({item})=> <Post info={item} borrar={(createdAt)=> this.borrar(createdAt)} />}
                    />

            
            <TouchableOpacity
                style = {styles.boton}
                onPress={()=> this.props.signOut() }
                >
                    <Text style ={styles.botonText}> Cerrar Sesion.</Text>
            </TouchableOpacity>
            
        </View>
    )
}
    
}