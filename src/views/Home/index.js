//A pasta assests guarda tudo que for visual
//React importa elemento que estão disponeivei tanto para web quanto pra mobile
import React, {useEffect, useState} from 'react';
//React Native são elementos exclusivos da versão mobile
import{ View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
// Componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

//Api
import api from '../../services/api';


export default function Home(){
    const[filter, setFilter] = useState ('today');
    //Craindo uma variavel "tasks" de estado para armazenar as tarefas que iram voltar do banco, e quando eu quero armazenar varios valores,
    //então eu utilizo [] dentro de () 
    const[tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();

    async function loadTasks(){
        setLoad(true);
        //Trocar os simbolos ('' por `` para fazer uma interpolação de strings)
        await api.get(`/task/filter/${filter}/11:11:11:11:11:11`).then(response => {
            setTasks(response.data)
            setLoad(false);
            });
    }

        async function lateVerify(){
            await api.get(`/task/filter/late/11:11:11:11:11:11`).then(response => {
            setLateCount(response.data.length)
            });
    }

    function Notification(){
    setFilter('late');
    }

    //useEffect sempre vai chamar a função sempre que a tela for carregada
    useEffect(() =>{
        loadTasks();
        lateVerify();
    },[filter])
    
    return (

    <View style={styles.container}>
    <Header showNotification = {true} showBack={false} pressNotification={Notification} late={lateCount}/>
    <View style={styles.filter}>
        <TouchableOpacity onPress={()=>setFilter('all')}>
            <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>
                Todos
            </Text>
        </TouchableOpacity>
    
        <TouchableOpacity onPress={()=>setFilter('today')}>
            <Text style={ filter == 'today' ? styles.filterTextActived : styles.filterTextInative}>
                Hoje
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setFilter('month')}>
            <Text style={ filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>
                Mês
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setFilter('week')}>
            <Text style={ filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>
                Semana
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setFilter('year')}>
            <Text style={ filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>
                Ano
            </Text>
        </TouchableOpacity>
    </View>
    <View style={styles.title}>
        <Text style={styles.titleText}>TAREFAS {filter == 'late' && ' ATRASADAS'} </Text>
    </View>


    <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
        {
            load 
            ?
            <ActivityIndicator color = '#EE6B26' size= {50}/> 
            : 
            //Estou usando um laço de repeitção aqui para que cada tarefa que ele encotrar no banco de dados ele gere um cartão
            tasks.map(t =>
            (
               <TaskCard done ={false} title={t.title} when={t.when} type={t.type}/>
            ))
        }
               
    </ScrollView>
    <Footer icon={'add'}/>
    </View>
    )
}