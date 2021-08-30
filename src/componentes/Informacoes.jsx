import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style/style';

export default function Informacoes(){
    return(
        <View style={styles.information}>
            <Text style={styles.titleHeader}>Bem vindo ao Soul Mili</Text>
            <Text>Nome: Kai Kamal Huening</Text>
            <Text>Data de Nascimento: 14/08/2002</Text>
            <Text>Nacionalidade: Coreano/Americano</Text>
            <Text>Dinheiro em conta: R$ 730000.00</Text>
        </View>
    )
}