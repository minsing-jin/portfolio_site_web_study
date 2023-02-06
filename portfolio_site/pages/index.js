import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Animaiton from '../components/home/animation'


export default function Home() {
  return (
	<Layout>
      <Head>
        <title>제발 되라 슈벌</title>
        <meta name="description" content="리눅스는 억까의 세계다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
	
	<section className="flex min-h-screen flex col items-center justify-center text-gray-600 body-font">
	  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<Hero/>
	  </div>
	</section>	  
	
	
		  
	</Layout>
  )
}
