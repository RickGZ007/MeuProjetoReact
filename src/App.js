import React from 'react';
import './App.css';

const Nome = (props) => {
  return (
    <div className="estilo">
     {props.texto}
    </div>
  )
}
 

function App() {
  return (
    <div>
      <Nome texto="Rick" />
      <Nome texto="Morty" />
      <Nome texto="Summer" />
      <Nome texto="Beth" />
      <Nome texto="Jerry" />
      <Nome texto="Birdperson" />
      <Nome texto="Squanchy" />
      
    </div>
  );
}

export default App;
