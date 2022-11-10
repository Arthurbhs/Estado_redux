import logo from './logo.svg';
import './App.css'
import Interval from './components/Interval';
import Média from './components/Média';
import Soma from './components/Soma';
import Sorteio from './components/sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercicio simples</h1>
      <div className='linha'>
      <Interval></Interval>

</div>

<div className='linha'>
<Média ></Média>
<Soma ></Soma>
<Sorteio ></Sorteio>
</div>
    </div>
  );
}

export default App;
