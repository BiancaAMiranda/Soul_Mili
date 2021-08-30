import React, {useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from '../style/style';

export default function Cadastro(){
    const [dados, setDados] = useState({
        nome: '',
        cpf: '',
        conta: '',
        agencia:'',
        valor: '',
    });

    const confirma = () => {
        if (dados.nome != '' && dados.cpf != '' && dados.conta != '' && dados.agencia != '' && dados.valor != ''){
            alert('Depósito realizado com sucesso! Obrigada por escolher o Soul Mili! Volte Sempre!')
        }
        else{
            alert('Preencha todos os campos.')
        }
    }

    return(
        <View style={styles.information}>
            <Text style={styles.titleHeader}>Cadastro Para Depósito</Text>
            <TextInput style={styles.input}
            placeholder='Nome do Titular ou Instituição'
            keyboardType= 'default'
            defaultValue={dados.nome}
            onChangeText={
                (value) => setDados({...dados, nome:value})
            } />
            <TextInput style={styles.input}
            keyboardType='number-pad'
            placeholder='CPF ou CNPJ'
            defaultValue={dados.cpf}
            onChangeText={
                (value) => setDados({...dados, cpf:value})
            } />
            <TextInput style={styles.input}
            keyboardType='numeric'
            placeholder='Número da Conta'
            defaultValue={dados.conta}
            onChangeText={
                (value) => setDados({...dados, conta:value})
            } />
            <TextInput style={styles.input}
            keyboardType='number-pad'
            placeholder='Agência'
            defaultValue={dados.agencia}
            onChangeText={
                (value) => setDados({...dados, agencia:value})
            } />
            <TextInput style={styles.input}
            keyboardType='numeric'
            placeholder='Valor do Depósito'
            defaultValue={dados.valor}
            onChangeText={
                (value) => setDados({...dados, valor:parseFloat(value)})
            } />
            <Text>{`Valor do depósito após acréscimo Soul Mili: ${dados.valor + (dados.valor * 0.7)}`}</Text>
            <Button title='Confirmar'
            onPress={confirma} />
        </View>
    )
}