import React from 'react';
import Akatsuki from './Akatsuki';
import itachiImage from '../assets/images/itachi.png';
import nagatoImage from '../assets/images/nagato.jpg';
import obitoImage from '../assets/images/obito.jpg';
import akatsukiImage from '../assets/images/akatsuki.jpg';
import darkBackground from '../assets/images/darkBG.jpg';
const akatsuki = [
  {
    name: 'Itachi Uchiha',
    affiliation: 'Akatsuki',
    clan: 'Uchiha Clan',
    classification: [
      'S-Rank',
      'Missing-nin'
    ],
    rank: 'Anbu',
    nature: 'Fire',
    jutsu: [
      'Amaterasu',
      'Crow Clone',
      'Izanami',
      'Genjutsu: Sharingan',
      'Summoning Technique (Crow)',
      'Susanoo'
    ],
    image: itachiImage
  },
  {
    name: 'Nagato(Pain)',
    affiliation: 'Akatsuki',
    clan: 'Uzumaki Clan',
    classification: [
      'S-rank',
      'Sensor Type'
    ],
    rank: 'Kami',
    nature: 'Fire',
    jutsu: [
      'Six Paths Technique',
      'Six Paths Of Pain',
      'Summoning Rinnegan',
      'Shinra Tensei',
      'ShapeShifting Technique'
    ],
    image: nagatoImage
  },
  {
    name: 'Obito Uchiha',
    affiliation: 'Akatsuki',
    clan: 'Uchiha Clan',
    classification: [
      'Jinchuriki',
      'Missing-nin',
      'Sensor Type',
      'S-rank'
    ],
    rank: 'Chunin',
    nature: 'Fire',
    jutsu: [
      'Kamui',
      'Infinite Tsukuyomi',
      'Izangi',
      'Seals',
      'Black reciever'
    ],
    image: obitoImage
  }
];

function AkatsukiList(){
  return(
    <div>
      <h2>Akatsuki</h2>
      <img src={akatsukiImage}/>
      <hr/>
      {akatsuki.map((akatsukilist, index) =>
        <Akatsuki name={akatsukilist.name}
          affiliation={akatsukilist.affiliation}
          clan={akatsukilist.clan}
          classification={akatsukilist.classification}
          rank={akatsukilist.rank}
          nature={akatsukilist.nature}
          jutsu={akatsukilist.jutsu}
          image={akatsukilist.image}
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
          color: #824c56;
        }
      `}</style>
    <style global jsx>{`
        body {
          background-image: url(${darkBackground});
          background-size: cover;
          background-repeat:no-repeat;
        }
      `}</style>
    </div>
  );
}

export default AkatsukiList;
