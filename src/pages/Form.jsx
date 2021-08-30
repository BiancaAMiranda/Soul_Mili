import React from 'react';
import { Text, View, Button } from 'react-native';
import Header from '../componentes/Header'
import Cadastro from '../componentes/Cadastro'

export default function Form(){
    return(
        <View style={{flex:1}}>
            <Header/>
            <Cadastro/>
        </View>
    )
}