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
        width:"50%",
        
    },

    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical:10,
        padding: 5
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
        marginTop: 2,
        padding: 5
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
        marginBottom: 5,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'gray',
        padding: 5,
        marginTop: 5,
        borderRadius: 10,
        flex: 1,
        marginTop: 20,
        width: "100%",
        alignItems: 'center',
        
    },
    modalContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    modal: {
        height:'70%',
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation:20,
        shadowColor:'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'black',
        backgroundColor: '#E9E3E2'
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
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#b2ad7f'
    },
    buscador:{
        borderRadius: 5,
        borderStyle: 'solid',
        backgroundColor: 'white',
        borderColor: '#7f8662',
        borderWidth: 2,
    },
    avisos:{
        color: "#f6c9ae",
        fontSize: 40
    }
})


export {styles}