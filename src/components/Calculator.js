import Button from './Button';
import Display from './Display';

 // Componente principal da calculadora :)
 // Ele é responsável por renderizar o display e os botões da calculadora

function Calculator() {
  return (
   <div className="calculator">

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