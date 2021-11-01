import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'
import CreatePosts from '../Screens/CreatePosts'
import Profile from '../Screens/Profile'

import Register from '../Screens/Register'
import Login from '../Screens/Login'
import { auth } from '../Firebase/Config'


const Drawer = createDrawerNavigator();

export default class MyDrawer extends Component{
    constructor(props){
        super(props);
        this.state= {
            isLoggedIn: false,
            error: '',
            user: ''
        }

    }
    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    isLoggedIn: true,
                    user: user.email
                })
            }else{
                this.setState({
                    isLoggedIn: false,
                })
            }
        })
    }


    registrarse(email,password,userName){
        auth.createUserWithEmailAndPassword(email,password)
        .then(user => {
            user.user.updateProfile({
                displayName: userName
            })
            this.setState({isLoggedIn: true, user: user.user.email})
        })

    .catch(error => {
        console.log(error);
        this.setState({isLoggedIn:false, error: error.message})
    })
    }


    ingresar (email, password){
        auth.signInWithEmailAndPassword(email,password)  
        .then(response => {
            this.setState({isLoggedIn: true, user: response.user.email})
        })

    .catch(error => {
        console.log(error);
        this.setState({isLoggedIn:false, error: 'Error en el loggeo'})
    })
      }

    signOut(){
        auth.signOut()
        .then(response => {
            this.setState({
                isLoggedIn:false,
            user: ''
            });
        
        }) 
        .catch(error =>{
            console.log(error);
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
                            {()=> <Profile user = {this.state.user} signOut={()=>this.signOut()}/>}
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
                                 {()=> <Register error = {this.state.error} registrarse =  {(email, password, userName) => this.registrarse(email,password,userName) }/>} 
                            </Drawer.Screen>
                        </React.Fragment>
                    }
                   
                    
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
