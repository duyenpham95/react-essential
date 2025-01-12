import './App.css'

let language = "JavaScript";
let moon = "🌙"

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
]
function Main({dishes}) {
  return (
    <ul>
      {dishes.map((dish) => (<li style={{listStyleType: "none"}}>{dish}</li>))}
    </ul>
  )
}

function App() {
  return (
    <>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes={items}/>
    </>
  )
}

export default App
