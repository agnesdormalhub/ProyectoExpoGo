import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        
        marginTop: 20,
        width: "100%",
        alignItems: 'center',
        flex: 1,

    },
    titulo:{
        fontFamily: 'arial',
        textAlign: 'center',
        color: '#f6c9ae',
        fontSize: '2rem'
    },

    flat:{
        width:"100%",
        
    },

    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical:10
    },
    boton: {
        backgroundColor: '#ececec',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#808080',
        marginTop: 2
    },
    enviar:{
        color: 'white'
    },

    textoIn:{
        color:'#b2ad7f',
        fontSize: 15,
    },

    botonText:{
        color:'#7f8662',
        fontWeight: 'bold',

    },
    publi:{
        backgroundColor: 'white',
        marginBottom: 5
    },
    perfil:{
        color:'#7f8662',
        fontSize: 15,

    },
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
    },
    img:{
        width:200,
        height:200,
    }
})


export {styles}