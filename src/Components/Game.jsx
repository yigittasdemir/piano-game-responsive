import React from 'react'

const Game = () => {

    function doo(){
        var dO = new Audio ("/songs/do.wav")
        dO.play();
        document.getElementById("coin").innerText ++;
    }
    function re(){
        var re = new Audio ("/songs/re.wav")
        re.play();
       document.getElementById("coin").innerText ++;
    }
    function mi(){
        var mi = new Audio ("/songs/mi.wav")
        mi.play();
        document.getElementById("coin").innerText ++;
    }
    function fa(){
        var fa = new Audio ("/songs/fa.wav")
        fa.play();
        document.getElementById("coin").innerText ++;
    }
    function sol(){
        var sol = new Audio ("/songs/sol.wav")
        sol.play();
        document.getElementById("coin").innerText ++;
    }
    function la(){
        var la = new Audio ("/songs/la.wav")
        la.play();
        document.getElementById("coin").innerText ++;
    }
    function si(){
        var si = new Audio ("/songs/si.wav")
        si.play();
        document.getElementById("coin").innerText ++;
    }


  return (
    <div id='game' className='game-container'>
      <div className="piano">
          <button onClick={doo}></button>
          <button onClick={re}></button>
          <button onClick={mi}></button>
          <button onClick={fa}></button>
          <button onClick={sol}></button>
          <button onClick={la}></button>
          <button onClick={si}></button>
      </div>
    </div>
  )
}

export default Game
