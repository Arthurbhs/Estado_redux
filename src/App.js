import logo from './logo.svg';
import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio simples</h1>
      <div className='linha'>
      <Card Title="Card 1" blue>y</Card>

</div>

<div className='linha'>
<Card Title="Card 1" red>y</Card>
<Card Title="Card 1" green>y</Card>
<Card Title="Card 2" purple>x</Card>
</div>
    </div>
  );
}

export default App;
