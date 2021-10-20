import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Register from '../Screens/Register'
import Login from '../Screens/Login'
import { auth } from '../Firebase/Config'

const Drawer = createDrawerNavigator();

export default class AuthDrawer extends Component{
    constructor(props){
        super(props);

    }


    registrarse(email,password){
        auth.createUserWithEmailAndPassword(email,password)
        .then(response => {
            this.setState({loggedIn: true})
        })

    .catch(error => {
        console.log(error);
        this.setState({loggedIn:false})
    })
    }


    ingresar (email, password){
        auth.signInWithEmailAndPassword(email,password)  
        .then(response => {
            this.setState({loggedIn: true})
        })

    .catch(error => {
        console.log(error);
        this.setState({loggedIn:false})
    })
      }
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Register" component={()=> <Register registrarse =  {(email, password) => this.registrarse(email,password)}/>} />
                    <Drawer.Screen name="Login" component= {()=> <Login ingresar = {(email, password) => this.ingresar(email,password)}/>} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
