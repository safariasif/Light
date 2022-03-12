import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'
import Banner from '../components/Banner/banner'
import WebBasic from './WebBasic/webbasic';
const Subject = [
  {
    id: "html",
    name: "HTML",
    instructor: "آصف صفری",
    deuration: "2:20:00",
  },
  {
    id: "css",
    name: "CSS",
    instructor: "آصف صفری",
    deuration: "2:20:00",
  },
  {
    id: "flex",
    name: "FlexBox",
    instructor: "آصف صفری",
    deuration: "2:20:00",
  },
  {
    id: "cssgrid",
    name: "CSS Grid",
    instructor: "آصف صفری",
    deuration: "2:20:00",
  },
];
export default function Home() {
  return (
    <div>
      <Head>
        <title>لایت | دنیایی برنامه نویسی</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar/>
      <Banner/>
      <WebBasic subject={Subject}/>
    </div>
  )
}
