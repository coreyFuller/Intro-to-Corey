import { useState } from 'react';
import Game from  '../components/Game'
import MainMenu from'../components/MainMenu'

const Home = () => {

  const [inGame, setInGame] = useState(false)

  const [started, setStarted] = useState(false)

  const start = () => {
    setInGame(true);
  };

  const stop = () => {
    setInGame(false)
  }

  return( 
    <div className='flex flex-col justify-center h-screen bg-gray-700'>
      <div className='flex flex-col text-center items-center'>
      {!inGame ? <MainMenu main_start = {start}/> 
      : <Game over = {stop}/>}
      </div>
    </div>
  )
    }

export default Home