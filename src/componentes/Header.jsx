import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style/style';

export default function HomeScreen(){
    return(
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Soul Mili</Text>
            <Text style={styles.textHeader}>O Melhor Banco é o Seu Banco</Text>
        </View>
    )
}