import { useReducer, useEffect } from "react";
import './App.css'
import cloud from './images/cloud.png'

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Page</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Apples", 
  "Bananas",
  "Oranges"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

console.log(dishObjects);

function Main({dishes, openStatus, onStatus}) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h2>Welcome to beautiful restaurant! {openStatus ? "Open": "Closed"}</h2>
      </div>
      <main>
        <img src={cloud} height={200} alt="A photo of cloud"></img>
        <ul>
          {dishes.map((dish) => (<li key={dish.i} style={{listStyleType: "none"}}>{dish.title}</li>))}
        </ul>
      </main>
    </>
  )
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true);
  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}.`)
  }, [])
  return (
    <>
      <h1>The restaurant is currently {status ? "open" : "closed"}</h1>
      <button onClick={toggle}>{status ? "Close": "Open"} Restaurant</button>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main 
      dishes={dishObjects} 
      openStatus={status} 
      onStatus={toggle}/>
    </>
  )
}

export default App
