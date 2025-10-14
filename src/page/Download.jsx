import React, { useEffect, useRef } from 'react';
import HeroDownload from '../components/Download/HeroDownload';
import DownloadApp from '../components/Download/DownloadApp';
import Footer from '../components/Footer'

// import HeroDownload from '../components/HeroDownload';

const Download = () => {


  const DownloadRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;

      if (hash === '#DownloadAppBtn' && DownloadRef.current) {
      DownloadRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='overflow-x-hidden'>

      {/* <HeroDownload /> */}
      <HeroDownload />

      <div ref={DownloadRef}>
        <DownloadApp />
      </div>
      <Footer />
    </div>
  );
}

export default Download;
