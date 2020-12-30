import Head from 'next/head';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Home() {

  const [planets, setApiResponse] = useState([])
  const [knownPlanets, setKnownPlanets] = useState()

  useEffect(() =>{
  axios.get('https://swapi.dev/api/planets').then((res) => {
    const response = res.data.results;
    setApiResponse(response);
  });
  },[])

  useEffect(() => {
    const knownPlanetsOnly = p => p.population != 'unknown'
    if(planets == []) return
    const displayPlanets = (planet) => <div key={planet.key} name= {planet.name} population = {planet.population}> {planet.name} - {planet.population} </div>
    setKnownPlanets(planets.filter(knownPlanetsOnly).map(displayPlanets))
  }, [planets])

  return (  
    <div className='flex-center h-screen text-bold text-8xl bg-red-500'>
      {knownPlanets}
    </div>
  );
}