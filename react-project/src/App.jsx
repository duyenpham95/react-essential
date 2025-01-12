import './App.css'

let language = "JavaScript";
let moon = "🌙"

function Header() {
  return (
    <header>
      <h1>Chloe's Page</h1>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </>
  )
}

export default App
