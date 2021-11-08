import { Camera } from "expo-camera";
import React, {Component} from "react";
import { Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import { styles } from "../Styles/Styles";
import { storage } from "../Firebase/Config";


export default class MyCamera extends Component{
constructor(props){
    super(props);
    this.state={
        photo: ""
    }
    this.camera;
}

takePhoto(){
    this.camera.takePictureAsync()
    .then((photo)=>{
    this.setState({
        photo: photo.uri
    })
    })
}

onReject(){
    this.setState({
        photo: "",
    })
}

onAcccept(){
    fetch(this.state.photo)
    .then((response)=> response.blob())
    .then((image)=>{
        const storageRef = storage.ref("camera/"+ Date.now());
        storageRef.put(image)
        .then(()=> {
            storageRef.getDownloadURL()
            .then((url)=> {
                console.log(url)
            })
        })
    })
}

render(){
    return(
        <React.Fragment>
            {
                this.state.photo ?
                <React.Fragment>
                <Image source = {{uri: this.state.photo}} style= {styles.preview} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                    onPress={()=> this.onReject()}
                    <Text>Rechazar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    onPress={()=> this.onAcccept()}
                    <Text>Aceptar</Text>
                    </TouchableOpacity>
                </View>
                </React.Fragment>
                :
                <React.Fragment>

            <Camera
                style= {styles.camera}
                type= {Camera.Constants.Type.front}
                ref= {reference => this.camera = reference}
            />
            <TouchableOpacity onPress={()=> this.state.takePhoto()}>
                <Text>SACAR FOTO</Text>
            </TouchableOpacity>
       </React.Fragment>
    
            }
             </React.Fragment>
    )
}

const styles = StyleSheet.create({
    camera:{
        flex: 1,
        width: "100%"
    },
    preview:{
        flex: 6,
        width: "100%"
    },
    btnContainer:{
        flex: 1
    }
})

}