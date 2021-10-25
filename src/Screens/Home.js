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

    render(){
        return(
            <View style= {styles.container}>

                {
                    this.state.loading ? (
                        <ActivityIndicator color={"green"} size={'large'} />
                    ) : (
                    <FlatList
                        data={this.state.posts}
                        keyExtractor={(item)=> item.id.toString()}
                        renderItem={({item})=> <Post info={item} />}
                    />
                    )
                }
            </View>
        )
    }
}
