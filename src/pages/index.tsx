import React from 'react'
import Head from 'next/head'

import Wireless from '../assets/rede.svg'
import { Container } from '../styles/Pages/Home';

const  Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="https://www.rocketseat.com/favicon.ico" />
      </Head>

      <main>
        <h1>Let's Code New Framework</h1>
      </main>
    </Container>
  )
}

export default Home