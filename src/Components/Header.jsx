import React from 'react'

const Header = () => {

  var coin = 0;
  //document.getElementById("coin").innerHTML = coin;


  return (
    <header>
        <ul>
            <li><a href="">Anasayfa</a></li>
            <li><a href="#game">Oyna</a></li>
        </ul>
        <div className="coin">
          <img src="/images/coin.png"/>
          <p id='coin'>0</p>
        </div>
    </header>
  )
}

export default Header
