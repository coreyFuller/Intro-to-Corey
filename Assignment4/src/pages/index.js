import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React, { useEffect } from "react"
import axios from "axios"
import apod from '../pages/api/apod'

export default function Home() {

  const [apod, setApod] = React.useState('')

  React.useEffect(() => {
    axios.get('api/apod').then((res) => setApod(res.data)) 
  }, []);


  console.log(apod)

  return (
    <main className="justify-center">
    <h1>{JSON.stringify(apod.custom_metadata.SentAt)}</h1>
    <div>
     {apod.upload_finished_at}
    </div>
    </main>
  )
}
