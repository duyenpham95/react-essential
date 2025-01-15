import { useState } from "react";
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

function Main({dishes}) {
  return (
    <>
      <div>
        <h2>Welcome to my page</h2>
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
  const [status, setStatus] = useState("Open");

  return (
    <>
      <h1>The restaurant is currently {status}</h1>
      <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes={dishObjects}/>
    </>
  )
}

export default App
