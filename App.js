import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Nesse caso não é nescessário especificar o arquivos pois só tem um lá dentro da pasta home,
//quando isso acontece ele por default busca por um arquivo index
import Home from './src/views/Home';
import Task from './src/views/Task';

export default function App() {
  return <Task/>
    
}


