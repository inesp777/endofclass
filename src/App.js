import logo from './logo.svg';
import './App.css';
import { Products, User, Card } from './Components'

function App() {
  return (
    <div >
      <div className='container'>
        <User />
        <Card />
      </div>
      <Products />

    </div>
  );
}

export default App;
