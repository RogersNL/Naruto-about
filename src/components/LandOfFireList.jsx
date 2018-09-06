import React from 'react';
import LandOfFire from './LandOfFire';
import narutoImage from '../assets/images/naruto.jpg';
import sasukeImage from '../assets/images/sasuke.jpg';
import sakuraImage from '../assets/images/sakura.png';
import kakashiImage from '../assets/images/kakashi.jpg';
import greenBackground from '../assets/images/greenBG.jpg';
import landOfFireImage from '../assets/images/landoffire.png';
const fireShinobi = [
  {
    name: 'Naruto Uzumaki',
    affiliation: 'Land of Fire',
    clan: 'Uzumaki Clan',
    classification: [
      'Jinchuriki',
      'Sage',
      'Sensor Type'
    ],
    rank: 'Genin',
    nature: 'Wind',
    jutsu: [
      'Rasengan',
      'Shadow Clone',
      'Sage Mode',
      'Tailed Beast Bomb',
      'Summoning Technique (Toad)'
    ],
    image: narutoImage
  },
  {
    name: 'Sasuke Uchiha',
    affiliation: 'Land of Fire',
    clan: 'Uchiha Clan',
    classification: [
      'Missing-nin'
    ],
    rank: 'Genin',
    nature: 'Lightning',
    jutsu: [
      'Sharingan',
      'Eternal Mangekyo Sharingan',
      'Rinnegan',
      'Chidori',
      'Susanoo',
      'Amaterasu',
      'Summoning Technique (Hawk, Snake)'
    ],
    image: sasukeImage
  },
  {
    name: 'Sakura Haruno',
    affiliation: 'Land of Fire',
    clan: 'Haruno Clan',
    classification: [
      'Medical-nin'
    ],
    rank: 'Jonin',
    nature: 'Earth',
    jutsu: [
      'Chakra Enhanced Strength',
      'Mystical Palm Technique',
      'Summoning Technique (Slug)'
    ],
    image: sakuraImage
  },
  {
    name: 'Kakashi Hatake',
    affiliation: 'Land of Fire',
    clan: 'Hatake Clan',
    classification: [
      'None'
    ],
    rank: 'Kage',
    nature: 'Lightning',
    jutsu: [
      'Chidori',
      'Kamui',
      'Rasengan',
      'Sharingan',
      'Summoning Technique (Ninja Dog)'
    ],
    image: kakashiImage
  }
];

function LandOfFireList(){
  return(
    <div>
      <h2>Land of Fire</h2>
      <img src={landOfFireImage}/>
      <hr/>
      {fireShinobi.map((fireShinobilist, index) =>
        <LandOfFire name={fireShinobilist.name}
          affiliation={fireShinobilist.affiliation}
          clan={fireShinobilist.clan}
          classification={fireShinobilist.classification}
          rank={fireShinobilist.rank}
          nature={fireShinobilist.nature}
          jutsu={fireShinobilist.jutsu}
          image={fireShinobilist.image}
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
          background-image: url(${greenBackground});
          background-size: cover;
          background-repeat:no-repeat;
        }
      `}</style>
    </div>
  );
}

export default LandOfFireList;
