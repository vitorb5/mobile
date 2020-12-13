import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import add from '../../assets/add.png';
import save from '../../assets/save.png';

export default function Footer({icon}){
    return(
    //"==" está comprando. "?" verificando se for igual, então faça, e o 
    //":" significa se for diferente faça, ": é iagul a um else". Exe. 15
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Image source={icon == 'add' ? add : save} style={styles.image}/>
        </TouchableOpacity>
        <Text style={styles.text}>
            Organizando sua vida
        </Text>
    </View>
)
}


