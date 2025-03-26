import './App.css'
import CounterUseState from "./components/CounterUseState"
import CounterUseReducer from "./components/CounterUseReducer"
import ShoppingCart from "./components/ShoppingCart"


function App() {

  return (
    <>
      <CounterUseState />
      <CounterUseReducer />
      <ShoppingCart />
    </>
  )
}

export default App
