import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../componentes/Header'
import Help from '../componentes/Help'

export default function Dicas(){
    return(
        <View style={{flex:1, backgroundColor: 'lightblue'}}>
            <Header/>
            <Help/>
        </View>
    )
}