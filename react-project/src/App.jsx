import './App.css'

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
    <ul>
      {dishes.map((dish) => (<li key={dish.i} style={{listStyleType: "none"}}>{dish.title}</li>))}
    </ul>
  )
}

function App() {
  return (
    <>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes={dishObjects}/>
    </>
  )
}

export default App
