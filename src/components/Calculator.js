import Button from './Button';
import Display from './Display';

function Calculator() {
  return (
    <div className="calculator">

      <Display value="0" />

      <div className="row">
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="/" />
      </div>

      <div className="row">
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="*" />
      </div>

      <div className="row">
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="-" />
      </div>

      <div className="row">
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
        <Button label="+" />
      </div>

    </div>
  );
}

export default Calculator;