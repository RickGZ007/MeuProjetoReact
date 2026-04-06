import React from 'react';
import Button from './Button';
import Display from './Display';

//import { render, screen } from '@testing-library/react';
//import App from './App';


 // Componente principal da calculadora :)
 // Ele é responsável por renderizar o display e os botões da calculadora

function Calculator() {
  return (
   <div className="calculator">

    {/* O display da calculadora, onde o resultado é mostrado */}

  <Display value="0.75" />

  <Button label="AC" type="triple" />
  <Button label="/" type="operator" />

  <Button label="7" />
  <Button label="8" />
  <Button label="9" />
  <Button label="*" type="operator" />

  <Button label="4" />
  <Button label="5" />
  <Button label="6" />
  <Button label="-" type="operator" />

  <Button label="1" />
  <Button label="2" />
  <Button label="3" />
  <Button label="+" type="operator" />

  <Button label="0" type="double" />
  <Button label="." />
  <Button label="=" type="operator" />

</div>
  );
}

export default Calculator;