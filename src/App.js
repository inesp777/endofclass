import logo from './logo.svg';
import './App.css';
import { Products, User, Card, Login } from './Components'

function App() {
  return (
    <div >
      <Login/>
      <div className='container'>
        <User />
        <Card />
      </div>
  <Products />
 

    </div>
  );
}

export default App;
