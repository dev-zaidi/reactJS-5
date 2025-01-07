import React from 'react'
import Footer from '../Footer/Footer';
import styles from './Landingpage.module.css'
import HideAppBar from '../Navbar/Navbar';
import Section from '../ImageSection/ImageSection';
import 'bootstrap/dist/css/bootstrap.min.css'
import StandardImageList from '../ImageSection/ImageSection';
import BMWRow from '../Section/section1';
import SectionWithTextAndCarousel from '../Section/section2'
import TextWithCarousel from '../Section/section3'
import FullWidthBox  from '../Section/section4';
import TwoIdenticalBlocks from '../Section/section5'

const LandingPage = ({onLogout}) => {
    return (
      <div className='container-fluid'>
        <HideAppBar/>
        {/* <FullWidthBox /> */}
        {/* <TwoIdenticalBlocks/> */}
        <TextWithCarousel/>
       
        <SectionWithTextAndCarousel/>
        <BMWRow/>
        <StandardImageList/>
         <button className="btn btn-primary mt-3" onClick={onLogout}>
           Log Out
         </button>
        <Footer/>
      </div>
    );
  };

export default LandingPage