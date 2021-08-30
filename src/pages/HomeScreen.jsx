import React from 'react';
import { Text, View } from 'react-native';
import Header from '../componentes/Header';
import Informacoes from '../componentes/Informacoes';

export default function HomeScreen(){
    return(
        <View style={{flex:1}}>
            <Header/>
            <Informacoes/>
        </View>
    )
}