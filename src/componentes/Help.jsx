import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../style/style';

export default function HomeScreen(){
    return(
        <View style={styles.information}>
            <ScrollView>
                <View style={styles.helpScroll}>
                    <Text style={styles.titleHeader}>Dicas</Text>
                    <Text style={styles.helpBox}>Faça um orçamento</Text>
                    <Text style={styles.helpBox}>Estabeleça metas para economizar</Text>
                    <Text style={styles.helpBox}>Restrinja gastos</Text>
                    <Text style={styles.helpBox}>Evite gastos desnecessários</Text>
                    <Text style={styles.helpBox}>Fique longe de dívidas</Text>
                    <Text style={styles.helpBox}>Separe um valor para despesas anuais</Text>
                    <Text style={styles.helpBox}>Tenha uma reserva para emergências</Text>
                    <Text style={styles.helpBox}>Separe as contas pessoais das profissionais</Text>
                    <Text style={styles.helpBox}>Use a tecnologia ao seu favor</Text>
                </View>
            </ScrollView>
        </View>
    )
}