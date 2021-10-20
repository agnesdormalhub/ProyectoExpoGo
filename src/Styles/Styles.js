import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 20
    },
    titulo:{
        fontFamily: 'arial',
        textAlign: 'center',
        color: '#f6c9ae',
        fontSize: '2rem'
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
        borderColor: '#808080'
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

    }
})


export {styles}