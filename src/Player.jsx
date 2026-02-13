import './Player.css'

function Player(props) {
  // código js y retorna código html, 1 solo elemento "padre"
  console.log(props)
  const classes = `player ${props.isActive ? 'player--active' : ''}`
  return (
    <section className={classes}>
      <h2 className="name">{props.name}</h2>
      <p className="score">{props.score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{props.currentScore || 0}</p>
      </div>
    </section>
  )
}

export default Player
