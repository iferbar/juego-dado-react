import { useState } from 'react'
import './App.css'
import Player from './Player.jsx'

function App() {
  // definimos nuestras variables de estado de la app
  const [score, setScore] = useState([8, 17])
  const [currentScore, setCurrentScore] = useState(0)
  const [activePlayer, setActivePlayer] = useState(0)
  const [dice, setDice] = useState(0)

  const handleNewGame = () => console.log('New game')
  const handleRollDice = () => {
    // obtener un número aleatorio entre 1 y 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    setDice(diceNumber)
    setCurrentScore(currentScore + diceNumber)
  }
  function handleHold() {
    console.log('Hold')
  }

  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        currentScore={activePlayer === 0 && currentScore}
        isActive={activePlayer === 0}
      />
      <Player
        name="Player 2"
        score={score[1]}
        currentScore={activePlayer === 1 && currentScore}
        isActive={activePlayer === 1}
      />
      {dice && (
        <img
          src={`/imagenes/dice-${dice}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
