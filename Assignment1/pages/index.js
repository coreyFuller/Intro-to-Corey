import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animals from '../public/animals.json'
import Animal from './src/Animal.js'


export default function Home() {

  const getAnimals = a => <Animal type = {a.type} state = {a.state} img = {a.img} adoption_fee = {a.adoption_fee}/>
  const chilOnly = a => a.state == 'chill'
  
  const cheap = a => a.adoption_fee < 15
  const cheapFormatted = Animals.filter(cheap).map(getAnimals)

  const medium = a => a.adoption_fee < 20 && a.adoption_fee > 15
  const mediumFormatted = Animals.filter(medium).map(getAnimals)

  const high  = a => a.adoption_fee > 20
  const highFormatted = Animals.filter(high).map(getAnimals)


  const chillAnimals = Animals.filter(chilOnly).map(getAnimals)
  const addSums  = (a, b) => a + b.adoption_fee
  const totalPrice = Animals.reduce(addSums, 0)

  return (
    <div className='bg-gray-800 h-full text-gray-200 p-2'>
      <div className='container mx-auto'>
        <div className='text-center'>
        <h1 className='text-8xl m-4 p-8'>Animal Adoption Center</h1>
        <div className='border-white border-2'>
          <h2>Low-Price Animals</h2>
          {cheapFormatted}
        </div>
        <div  className='border-white border-2'>
          <h2>Medium-Price Animals</h2>
          {mediumFormatted}
        </div>
        <div  className='border-white border-2'>
          <h2>High-Price Animals</h2>
          {highFormatted}
        </div>
        </div>
      </div>
    </div>
  )
}
