import React from 'react';
import Navbarmain from './Navbarmain';
import Body from './Body';
import Footer from './Footer';
// import animation from './assets/images/CK_Minter_BGAnimation.mp4';

function App() {
  return (
    <>
      {/* <div className='page'> */}
      <div className='background'>
        {/* <video  autoPlay="autoplay" loop="loop" id="videoloop" src={animation}>
      </video> */}
        <div className='overlay'>
          <Navbarmain />
          <Body />
          <Footer />
          <div className='w-50'>

          </div>
        </div>
      </div>
      {/* </div> */}

    </>
  );
}

export default App;
