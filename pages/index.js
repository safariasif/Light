import Head from 'next/head';
import Navbar from '../components/Navbar/navbar';
import Banner from '../components/Banner/banner';
import Meta from '../components/Meta/Meta';
import Footer from '../components/Footer/footer';
import WebBasic from './WebBasic/webbasic';
import WhyLight from '../components/whyLight';
import { Subscribe } from '../components/subscribe';
import { OurTeacher } from '../components/ourTeacher';
import Features from '../components/feature/index';
import Accordaint from '../components/Accordiant';
import NewCourses from '../components/newCourses';
import Nav from '../components/Navbar/nav';
export default function Home(props) {
  return (
    <div className="relative">
      <Meta title={'لایت | دنیایی برنامه نویسی'}></Meta>
      <link href='<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />'></link>
      <Nav/>
      <Banner />
      <WebBasic />
      <WhyLight />
      <NewCourses />
      <OurTeacher />
      <Features />
      <Accordaint />
      <Subscribe />

      <Footer />
    </div>
  );
}
