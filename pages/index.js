import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'
import Banner from '../components/Banner/banner';
import Meta from '../components/Meta/Meta';
export default function Home() {
  return (
    <div>
      <Meta title={'لایت | دنیایی برنامه نویسی'}></Meta>
      <Navbar />
      <Banner />
    </div>
  );
}
