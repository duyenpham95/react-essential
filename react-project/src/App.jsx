import './App.css'

let language = "JavaScript";
let moon = "🌙"

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Page</h1>
      <p>Copyright {props.year}</p>
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
