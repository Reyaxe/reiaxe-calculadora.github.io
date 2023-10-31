import './App.css';
import './componentes/display';
import Display from './componentes/display';
import Botones from './componentes/botones';
import BotonClear from './componentes/botonclear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input, setImput] = useState('');

  const agregarInput = valor => {
   setImput(input + valor);
   };
 
  const calcularResultado = () => {
   if (input) {
    setImput(evaluate(input));
   } else {
 alert('ingrese un valor por favor');
   }
  };

  return (
    <div className="App">
      
       <div className='contenedor-calculadora'>
        <Display input={input}/>
        <div className='fila'>
          <Botones manejarClic={agregarInput}>1</Botones>
          <Botones manejarClic={agregarInput}>2</Botones>
          <Botones manejarClic={agregarInput} >3</Botones>
          <Botones manejarClic={agregarInput}>+</Botones>
          </div>
        
        <div className='fila'>
        <Botones manejarClic={agregarInput}>4</Botones>
        <Botones manejarClic={agregarInput}>5</Botones>
        <Botones manejarClic={agregarInput}>6</Botones>
        <Botones manejarClic={agregarInput}>-</Botones>
        </div>
        
        <div className='fila'>
        <Botones manejarClic={agregarInput}>7</Botones>
        <Botones manejarClic={agregarInput}>8</Botones>
        <Botones manejarClic={agregarInput}>9</Botones>
        <Botones manejarClic={agregarInput}>*</Botones>
        </div>
        
        <div className='fila'>
        <Botones manejarClic={agregarInput}>0</Botones>
        <Botones manejarClic={agregarInput}>.</Botones>
        <Botones manejarClic={calcularResultado}>=</Botones>
        <Botones manejarClic={agregarInput}>/</Botones>
        </div>

       <div className='fila'>
       <BotonClear manejarClear={() => setImput('')}>c</BotonClear>
       </div>
       </div>

       </div>
);

  }
export default App;
