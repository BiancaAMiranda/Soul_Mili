import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titleHeader:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'serif',
    },
    textHeader:{
        color: 'deepskyblue',
        fontSize: 15,
    },
    information:{
        flex: 4, 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor: 'lightblue',
    },
    input:{
        width: '100%',
        height:40,
        textAlign: 'center'
    },
    helpBox:{
        width: '90%',
        borderWidth: 3,
        borderColor: 'blue',
        padding: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    helpScroll:{
        alignItems: 'center',
    }
})