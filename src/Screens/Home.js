import React, {Component} from "react";
import {View, Text} from 'react-native';
import { styles } from "../Styles/Styles";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <View style= {styles.container}>
                <Text>
                    Home
                </Text>
            </View>
        )
    }
}
