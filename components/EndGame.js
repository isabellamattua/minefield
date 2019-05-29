import React from 'react';

const RulesStyle = {
    color: "black",
    backgroundColor: "#dee7e8",
    width: '1000px'
  }
  
  
  
  const EndGame = () => (
      <div style={RulesStyle}>
          <h2 className="RulesTexts">You Lost:</h2>
          <p>Sorry but you lost</p>
          <br/><br/><br/><br/><br/>
      
      </div>
  )

  export default EndGame;