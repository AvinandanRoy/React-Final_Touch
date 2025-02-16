
import './App.css'
import { Counter } from './Counter';
import Navbar from './Navbar';

function App() {
  const name = 'Avinandan Roy'
  return (
    <>
    <Navbar name={name}/>
    <Counter />

    </>
  )
}

export default App
