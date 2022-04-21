import React from 'react'

const Games = () => {
  return (
    <div id='games' className='games-container'>
      <div className="games">
      <div className="game">
          <div className="game-info">
              <img className='game-image' src="/images/game-image2.jpg"/>
              <h3 className='game-name'>Piano Game</h3>
              <button><a href="/games/">Play now</a></button>
          </div>
      </div>
      <div className="game">
          <div className="game-info">
              <img className='game-image' src="/images/game-image1.jpeg"/>
              <h3 className='game-name'>Cart Game</h3>
              <button><a href="">Play now</a></button>
          </div>
      </div>
      <div className="game">
          <div className="game-info">
              <img className='game-image' src="/images/game-image3.png"/>
              <h3 className='game-name'>Snake Game</h3>
              <button><a href="">Play now</a></button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Games
