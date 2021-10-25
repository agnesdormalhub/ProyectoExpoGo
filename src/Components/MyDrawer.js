import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'
import CreatePosts from '../Screens/CreatePosts'

import Register from '../Screens/Register'
import Login from '../Screens/Login'
import { auth } from '../Firebase/Config'


const Drawer = createDrawerNavigator();

export default class MyDrawer extends Component{
    constructor(props){
        super(props);
        this.state= {
            isLoggedIn: false,
            error: ''
        }

    }


    registrarse(email,password){
        auth.createUserWithEmailAndPassword(email,password)
        .then(response => {
            this.setState({isLoggedIn: true})
        })

    .catch(error => {
        console.log(error);
        this.setState({isLoggedIn:false, error: 'Error en el registro'})
    })
    }


    ingresar (email, password){
        auth.signInWithEmailAndPassword(email,password)  
        .then(response => {
            this.setState({isLoggedIn: true})
        })

    .catch(error => {
        console.log(error);
        this.setState({isLoggedIn:false, error: 'Error en el loggeo'})
    })
      }
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    {
                        this.state.isLoggedIn ?
                        <React.Fragment>
                            <Drawer.Screen name="Home">
                                {() => <Home/>}
                            </Drawer.Screen>
                        <Drawer.Screen name= 'Profile'>
                            {()=> <Home/>}
                        </Drawer.Screen>
                        <Drawer.Screen name= 'Create'>
                            {(drawerProps)=> <CreatePosts drawerProps={drawerProps} />}
                        </Drawer.Screen>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Drawer.Screen name="Login">
                                {()=> <Login ingresar = {(email, password) => this.ingresar(email,password)}/>} 
                            </Drawer.Screen>
                            <Drawer.Screen name="Register">
                                 {()=> <Register registrarse =  {(email, password) => this.registrarse(email,password)}/>} 
                            </Drawer.Screen>
                        </React.Fragment>
                    }
                   
                    
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
