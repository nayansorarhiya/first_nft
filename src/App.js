import React from 'react';
import Navbarmain from './Navbarmain';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className='background'>
        <div className='overlay'>
          <Navbarmain />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
