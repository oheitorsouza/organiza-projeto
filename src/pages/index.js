import React from 'react';
import Navbar from '../../components/Navbar';
import Tabs from '../../components/sobre';
import ButtonGroup from '../../components/botõesesquerdohm';
import ImagesComponent from '../../components/imagenshm'
import Footer from '../../components/Footer';



export default function Home() {
  return (
    <h1>
     <Navbar/>
      
      <Tabs />
      <ButtonGroup/>
      <ImagesComponent />
      <Footer/>
      </h1>
      

      
  )
}