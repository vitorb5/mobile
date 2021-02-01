import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
//Icones
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';

export default function Header({showNotification, showBack, pressNotification, late}){
    return(
        //O símbolo && significa então. Exemplo linha 20.
        // O "?" é um if ternario é uma pergunta, se tal condição for verdadeira. Exemplo linha 16, e ":"
        // é igual a else, ou seja, se não for verdadeiro faça. Exemplo linha 22
            <View style= {styles.header}>

            {showBack ?
            <TouchableOpacity style={styles.qrcodeIcon}>
            <Image source={back} style={styles.notificationQrcode}/>
            </TouchableOpacity>            

           :
            <TouchableOpacity style={styles.qrcodeIcon}>
            <Image source={qrcode} style={styles.notificationQrcode}/>
            </TouchableOpacity>
            }

            <Image source={logo} style={styles.logo}/>
            
            
            {
            showNotification && late > 0 &&
            <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                <Image source={bell} style={styles.notificationImage}/>
                <View style={styles.circle}>
                    <Text style={styles.notificationText}>{late}</Text>
                </View>

            </TouchableOpacity>
            }
        </View>

    )

}