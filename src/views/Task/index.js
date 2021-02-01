import React, {useState} from 'react';

//Elementos
import {View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Switch} from 'react-native';


//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DataTimeInput from '../../components/DateTimeInput/index.android';
import styles from './styles';

import typeIcons from '../../utils/typeIcons';

export default function Task(){
    const [done, setDone] = useState(false);
    return(
        //showBack linha 17 <Header showBack = {true}/>troca o simbolo do do qrcode pelo voltar
        //linha 18 Duas chaves = {{}} pelo fator de que aplicamos o efeito diretamente
        //multiline liha 38 é qu epermite o usuario dar enter para digitar na linha de baixo
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack = {true}/>
            <ScrollView style={{width: '100%'}}>
                <ScrollView horizontal={true}>
                {
                    typeIcons.map(icon =>(
                        icon != null &&
                    <TouchableOpacity>
                        <Image source={icon} style={styles.imageIcon}/>
                    </TouchableOpacity>
                ))
                }
                </ScrollView>
                
                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer..." />
            
                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} maxLength={200} 
                placeholder="Detalhes da atividade que eu tenho que lembrar"
                multiline={true} />

                <DataTimeInput type={'date'}/>
                <DataTimeInput type={'hour'}/>

                <View style={styles.inLine}>
                     <View style={styles.inputInLine}>
                      <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#0B1A4A' : '#EE6B26' }/>
                      <Text style={styles.switchLab}>Concluído</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.removeLabel}>EXCLUÍR</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
                <Footer icon={'save'}/>
        </KeyboardAvoidingView>
    )
}