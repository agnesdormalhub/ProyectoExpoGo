import { Camera } from "expo-camera";
import React, {Component} from "react";
import { Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import { styles } from "../Styles/Styles";
import { storage } from "../Firebase/Config";


export default class MyCamera extends Component{
constructor(props){
    super(props);
    this.state={
        photo: "",
        permission: false,

    }
    this.camera;
}
componentDidMount(){
    Camera.requestCameraPermissionsAsync()
    .then(()=>{
        this.setState({
            permission:true
        })
    })
    .catch(()=>{
        this.setState({
            permission:false
        })
    })
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
                this.props.onPhotoUpload(url)
            })
        })
    })
}

render(){
    if(this.state.permission === false) return <Text style={styles.avisos}>No hay Permisos</Text>

    return(
        <React.Fragment>
            {
                this.state.photo ?
                <React.Fragment>
                <Image source = {{uri: this.state.photo}} style= {styles.img} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity  style={styles.boton} onPress={()=> this.onReject()}>
                    
                    <Text style={styles.botonText}> Rechazar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.boton} onPress={()=> this.onAcccept()}>
                    
                    <Text style={styles.botonText}>Aceptar</Text>
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
            <TouchableOpacity style={styles.boton} onPress={()=> this.takePhoto()}>
                <Text style={styles.botonText}>Sacar foto</Text>
            </TouchableOpacity>
       </React.Fragment>
    
            }
             </React.Fragment>
    )
}
}


