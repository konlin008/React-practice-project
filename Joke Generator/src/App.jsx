import axios from "axios"
import { useState } from "react"

function App() {
  const [joke, setJoke] = useState('')

  function generateJoke() {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then(res => {
        setJoke(res.data.joke)
      })
  }
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1>Generate Programming Joke </h1>
        <button onClick={generateJoke}>Generate joke</button>
        <h3>{joke}</h3>
      </div>


    </>

  )
}

export default App
