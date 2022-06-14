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
          content='We provide millions of ways to help'
        />
        {/* for media social meta */}
        <meta
          property='og:title'
          content='StoreZZ - Topup & Get a New Experience in Gaming'
        />
        <meta property='og:description' content='players become real winners' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dblvavqbv/image/upload/v1655203956/portfolio-images/storezz_uxmjpf.png'
        />
        <meta property='og:url' content='https://storezz.tosulafiffudin.com' />
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          content='StoreZZ - Topup && We provide millions of ways to help
          players become real winners'></meta>
        <meta
          name='google-site-verification'
          content='Gy8DecfJhmdkMec5xQrsKKV6mriP35Ynkhxl1_eX3oU'
        />
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
