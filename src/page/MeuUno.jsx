
import React, { useEffect, useRef } from 'react';
import Info from "../components/MeuUno/Info";
import Tanque from "../components/MeuUno/Tanque";
import Logout from "../components/MeuUno/Logout";
import Footer from '../components/Footer';

const MeuUno = () => {
  return (

<div>


<Tanque />
<Info />
<Logout />
<Footer />
</div>



  )
}

export default MeuUno