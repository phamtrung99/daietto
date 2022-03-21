import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeLayout from '../assets/styled/Home'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div>Hello</div>
    </HomeLayout>
  )
}

export default Home
