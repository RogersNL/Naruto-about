import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className="jumbotron">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
        h1 {
          font-family: 'Permanent Marker', cursive;
          text-align: center;
          font-size: 90px;
        }
        h2 {
          text-align: center;
          font-size: 70px;
        }
        .links {
          text-align: center;
        }
      `}</style>
      <h1>Naruto</h1>
      <h2>Character Descriptions</h2>
      <div className="links"><Link to="/">Home</Link> | <Link to="/landoffire">Land of Fire</Link> | <Link to="/landofwind">Land of Wind</Link> | <Link to="/akatsuki">Akatsuki</Link></div>
    </div>

  );
}

export default Header;
