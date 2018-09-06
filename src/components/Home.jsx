import React from 'react';
import narutoHome from '../assets/images/narutohome.png';
function Home(){
  return(
    <div>
      <img src={narutoHome} />
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: #3f53c6;
        }
      `}</style>
    </div>
  );
}

export default Home;
