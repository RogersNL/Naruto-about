import React from 'react';
import PropTypes from 'prop-types';

function Akatsuki(props){
  return(
    <div className = "card">
      <img className="card-img-top" src={props.image}/>
      <h3 className = "card-title">{props.name}</h3>
      <div className = "card-body">
        <p><strong>Affiliation:</strong> {props.affiliation}</p>
        <p><strong>Clan:</strong> {props.clan}</p>
        <p><strong>Classification:</strong></p>
        <ul>{props.classification.map((classify, index) =>
          <li key={index}>{classify}</li>
        )}</ul>
      <p><strong>Rank:</strong> {props.rank}</p>
        <p><strong>Nature:</strong> {props.nature}</p>
        <p><strong>Jutsu:</strong></p>
        <ul>{props.jutsu.map((jutsulist, index) =>
          <li key={index}>{jutsulist}</li>
        )}</ul>
      </div>
      <style jsx>
        {`h3 {
            font-size: 70px;
            text-align: center;
          }
          .card {
            background-color: #824c56;
            margin-bottom: 30px;
            border: 3px solid black;
            border-radius: 10px;
          }
          .card:hover{
            background-color: #c9808e;
          }
          img{
            object-fit: cover;
            width:100%;
            height: 60%;
          }
          .card-body{
            padding-left: 20%;
          }
          p, li{
            font-size: 30px;
          }
        `}

      </style>
    </div>
  );
}

Akatsuki.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  clan: PropTypes.string.isRequired,
  classification: PropTypes.arrayOf(PropTypes.string.isRequired),
  rank: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  jutsu: PropTypes.arrayOf(PropTypes.string.isRequired),
  image: PropTypes.element.isRequired
};

export default Akatsuki;
