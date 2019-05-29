import React from 'react'

const TitleStyle = {
  
  backgroundColor: "#2ac6ed",
  width: '1000px',
  height: "170px",
  fontSize: "21px"
}

const ButtonStyle = {
    background: "#1e5a63",
    border: "none",
    color: "white",
    padding: "15px", 
    textAlign: 'center',
    fontSize: "20px",
    
}


class ButtonStart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'easy' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {value: event.target.value } )
        
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    
    render() {
        return (
            <div style={TitleStyle}>
            <form onSubmit={this.props.getDifficulty}>
                <br/>
                    <input type="radio" name="difficulty" value="easy" onChange={this.handleChange} checked /> Easy
                    <br/>
                    <input type="radio" name="difficulty" value="hard" onChange={this.handleChange}/> Hard

                    <br/><br/>
                    <button style={ButtonStyle} > Start Game!</button>
        
            </form>
          </div>


        );
    }

}



export default ButtonStart