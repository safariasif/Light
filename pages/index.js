import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'
import Banner from '../components/Banner/banner';
import Meta from '../components/Meta/Meta';
import Footer from '../components/Footer/footer';
export default function Home() {
  return (
    <div>
      <Meta title={'لایت | دنیایی برنامه نویسی'}></Meta>
      <Navbar />
      <Banner />
      <Footer/>
    </div>
  );
}
