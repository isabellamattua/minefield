import React from 'react';
import './components/css/App.css';
import Title from './components/Title';
import Rules from './components/Rules';
import Game from './components/Game'
import ButtonStart from './components/ButtonStart';
import Gameboard from './components/Gameboard';



class App extends React.Component {
  state = {
    dif: "notDeter"
  }

  getDifficulty = async (e) => {
    e.preventDefault();
    const difficulty = e.target.elements.difficulty.value;


    console.log(difficulty)

    this.setState ({
      dif: difficulty
    })
  }
  

  render () {

    if (this.state.dif === "notDeter") {
      return (
        <div className="App">
          <header className="App-header">
            <Title></Title>
            <Rules></Rules>
            <ButtonStart getDifficulty={this.getDifficulty}></ButtonStart>
          </header>
         
        </div>
      );
    } else {
      console.log(this.state.dif);
        return (
          <div className="App">
            <header className="App-header">
              <Title></Title>
              <Gameboard value={this.state.dif}/>
            </header>
          </div>
        );
    }

  }



}




export default App;

