import React, {Component} from "react";
import {View, Text, ActivityIndicator} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { db } from "../Firebase/Config";
import { styles } from "../Styles/Styles";
import Post from "../Components/Post";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount(){
        db.collection("posts").orderBy("createdAt","desc").onSnapshot((docs) => {
            let posts = []
            docs.forEach((doc)=>{
                posts.push({
                    id: doc.id,
                    data: doc.data()
                });
            })
            this.setState({
                posts: posts,
                loading: false
            })
        })
    }

    borrar(createdAt){
        db.collection('posts').where('createdAt', '==', createdAt ).get()
        .then(data => {
            data.forEach(doc => doc.ref.delete())
            const postsFiltered = this.state.posts.filter(post => post.data.createdAt != createdAt)
            console.log(this.state.posts)
            this.setState({posts: postsFiltered});
        })
    }

    render(){
        return(
            <View style= {styles.container}>
                  <Text style={styles.titulo}>Home</Text>

                {
                    this.state.loading ? (
                        <ActivityIndicator color={"gray"} size={"small"} />
                    ) : (
                    <FlatList
                        style ={styles.flat}
                        data={this.state.posts}
                        keyExtractor={(item)=> item.id.toString()}
                        renderItem={({item})=> <Post info={item} borrar={(createdAt)=> this.borrar(createdAt)}/>}
                    />
                    )
                }
                {
                    this.state.loading == false && this.state.posts.length == 0 ?
                    <Text> Aun no hay publicaciones </Text> :
                    null

                }
            </View>
        )
    }
}
