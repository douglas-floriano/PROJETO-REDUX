import React from 'react';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';


function App() {
  return (
    <div className='App'>
      <h1>PROJETO-REDUX</h1>
      
      <div className='linha'>
       <Intervalo></Intervalo>
      </div>

      <div className='linha'>
        <Card title="Card2" green> TESTE 2 </Card>
        <Card title="Card3" blue> TESTE 3 </Card>
        <Card title="Card4" purple>TESTE 4 </Card>
        
      </div>
    </div>
  )
}

export default App;
