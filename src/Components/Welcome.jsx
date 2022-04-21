import React from 'react'

const Welcome = () => {

  function beep(){
    var beepSong = new Audio ("/songs/beep.wav")
    beepSong.play();
  }

  return (
    <div id='about' className='welcome-container'>
      <img src="images/coins.png"/>
      <div className="welcome">
          <p>Selam değerli kullanıcı, hem piyano çalıp hem coin kazanmak ister misin? Sanırım buna cevabın evet :) Fakat kazandığın coinler ne yazık ki gerçek coinler değiller:(</p>
      </div>
      <div className="view-all">
      <button>Aşağıya in ve oyna</button>
      </div>
    </div>
  )
}

export default Welcome
