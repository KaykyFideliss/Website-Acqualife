import React from 'react';
import HeroDownload from '../components/Download/HeroDownload';
import DownloadApp from '../components/Download/DownloadApp';
import Footer from '../components/Footer'

// import HeroDownload from '../components/HeroDownload';

const Download = () => {
  return (
    <div className='overflow-x-hidden'>
     
{/* <HeroDownload /> */}
    <HeroDownload />
  
    <DownloadApp /> 
 
    <Footer />
    </div>
  );
}

export default Download;
