//A pasta assests guarda tudo que for visual
//React importa elemento que estão disponeivei tanto para web quanto pra mobile
import React from 'react';
//React Native são elementos exclusivos da versão mobile
import{ View, Text } from 'react-native';
import styles from './styles';
// Componentes 
import Header from '../../components/Header'

export default function Home(){
    return (

    <View style={styles.container}>
    <Header showNotification = {true} showBack={false}/>
    </View>
    )
}