import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/organisms/NavBar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionStep from '../components/organisms/TransactionStep'
import FeaturedGame from '../components/organisms/FeaturedGame'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'
import Head from 'next/head'
const Home: NextPage = () => {
  useEffect(() => {
    // <!-- AOS Animation -->
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>StoreZZ - Topup & Get a New Experience in Gaming</title>
        <meta
          name='description'
          content='Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati'
        />
        {/* for media social meta */}
        <meta
          property='og:title'
          content='StoreZZ - Topup & Get a New Experience in Gaming'
        />
        <meta
          name='description:og'
          content='Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati'
        />
        <meta property='og:image' content='https://' />
        <meta property='og:url' content='https://storezz.tosulafiffudin.com' />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home
