import React from "react";
import {View, Text} from 'react-native'
import { styles, styles } from "../Styles/Styles";

export default function Post(props){
 
    return(
        <View style ={styles.container}>
            <Text> {props.info.data.username} </Text>
            <Text> {props.info.data.title} </Text>
            <Text> {props.info.data.description} </Text>
        </View>
    )

}
