import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Head from 'next/head';
import AboutUs from "../components/AboutUs";
import SpecialMenu from "../components/SpecialMenu";
import Chef from "../components/Chef";
import Intro from "../components/Intro";
import Laurels from "../components/Laurels";
import Gallery from "../components/Gallery";
import FindUs from "../components/FindUs";
import Footer from "../components/Footer";
import Reservations from "../components/Reservations";
import Menu from "../components/Menu";

export default function Home() {

  return (
    <main className="">
      <Head>
        <title>Habana</title>
        <link rel="shortcut icon" href="https://images.squarespace-cdn.com/content/v1/5d38be67c7d842000198f198/1567541699196-BJ3HTDXANI83S5GZ1QSM/Habana-Gold-Logo-03.png" />
        <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"/>
      </Head>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Reservations/>
      <Menu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </main>
  )
}
