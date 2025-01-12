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

function App() {
  return (
    <>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <main>
        <h2>Welcome</h2>
      </main>
    </>
  )
}

export default App
