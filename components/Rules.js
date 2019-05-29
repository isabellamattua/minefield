import React from 'react'

// Styling Tittle component with JSX object
const RulesStyle = {
  color: "black",
  backgroundColor: "#dee7e8",
  width: '1000px'
}



const Rules = () => (
    <div style={RulesStyle}>
        <h2 className="RulesTexts">Rules:</h2>
        <p>You are presented with a board of squares.</p>
        <p> Some squares contain mines (bombs),others don't. </p>
        <p> If you click on a square containing a bomb, you lose. </p>
        <br/><br/><br/><br/><br/>
    
    </div>
)

export default Rules