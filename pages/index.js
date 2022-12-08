import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Shear from '../components/Shear'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'
import Cards from '../components/Cards'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      < Header/>

      <main className={styles.main}>
        < Search/>
        <h1 className={styles.title}>
          Breaking Bad
        </h1> 
        <p>Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante 
          para asegurar el futuro de su familia al fabricar y vender metanfetamina.</p>
        
        < Cards/>

        < Shear/>

        < Footer/>

      </main>

    </div>

    

    
  )
}

