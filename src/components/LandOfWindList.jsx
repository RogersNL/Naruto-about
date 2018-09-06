import React from 'react';
import LandOfWind from './LandOfWind';
import gaaraImage from '../assets/images/gaara.jpg';
import kankuroImage from '../assets/images/kankuro.png';
import temariImage from '../assets/images/temari.jpg';
import sandyBackground from '../assets/images/sandBG.jpg';
import landOfWindImage from '../assets/images/landofwind.png';

const windShinobi = [
  {
    name: 'Gaara',
    affiliation: 'Land of Wind',
    clan: 'Kazekage Clan',
    classification: [
      'Jinchuriki',
      'Sensor Type'
    ],
    rank: 'Kage',
    nature: 'Wind',
    jutsu: [
      'Armor of Sand',
      'Desert Wave',
      'Third Eye',
      'Sand Clone'
    ],
    image: gaaraImage
  },
  {
    name: 'Kankuro',
    affiliation: 'Land of Wind',
    clan: 'Kazekage Clan',
    classification: [
      'None'
    ],
    rank: 'Jonin',
    nature: 'Wind',
    jutsu: [
      'Chakra Threads',
      'Puppet Technique'
    ],
    image: kankuroImage
  },
  {
    name: 'Temari',
    affiliation: 'Land of Wind',
    clan: 'Kazekage Clan',
    classification: [
      'None'
    ],
    rank: 'Jonin',
    nature: 'Wind',
    jutsu: [
      'Great Folding Fan',
      'Summoning Technique (Kamatari)'
    ],
    image: temariImage
  },
];
function LandOfWindList(){
  return(
    <div>
      <h2>Land of Wind</h2>
      <img src={landOfWindImage}/>
      <hr/>
      {windShinobi.map((windshinobilist, index) =>
        <LandOfWind name={windshinobilist.name}
          affiliation={windshinobilist.affiliation}
          clan={windshinobilist.clan}
          classification={windshinobilist.classification}
          rank={windshinobilist.rank}
          nature={windshinobilist.nature}
          jutsu={windshinobilist.jutsu}
          image={windshinobilist.image}
          key ={index}/>
      )}
      <style jsx>{`
        img {
          width:100%;
          border-radius: 30px;
        }
        h2 {
          text-align: center;
          font-size: 100px;
        }
      `}</style>
    <style global jsx>{`
        body {
          background-image: url(${sandyBackground});
          background-size: cover;
          background-repeat:no-repeat;
        }
      `}</style>
    </div>
  );
}

export default LandOfWindList;
