import React from 'react';
import CheckMark from './img/check.png';
import './css/ButtonCSS.css';


function GameCell(props) {
  
  return (

    <div>
      {props.marked ? <div> <img  src={CheckMark} alt="Livre" /> </div> : <div>  <button className="cell button" onClick={props.onClick}> ? </button> </div>  }
       
    </div>
  );
}
  export default GameCell

