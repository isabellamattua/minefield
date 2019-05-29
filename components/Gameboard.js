import React from 'react';
import './css/TableCss.css'

import GameCell from './GameCell';


const GameStyle = {
        color: "black",
        width: '1000px',
        height: '500px',
        backgroundColor: "#dee7e8",
    }
    
const board = [ ]
let randomN = 9;
let text = '';
const boardC = [].fill(null)
let endGame = "false";
let dif = "";


function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}

for( let i =0 ; i <50 ; i ++){
        randomN= getRandomInt(0,2);
        board[i] = randomN;
    
}


function getDifficulty () {
        dif = this.props.value;
        console.log(dif);
        console.log("sasasasas")

    }

class Gameboard extends React.Component {
    
   
   
    renderCell (i) {
        return(
            <GameCell 
                value = {board[i]}
                onClick = {() => this.handleClick(i)}
                marked = {boardC[i]}
            />
            
        );
    }

    handleClick (i) {
        if (endGame === "false") {
            if (board[i] == "1") {
                endGame = "true";
                alert("You lost!")
            }
            else{
                boardC[i] = true
                this.forceUpdate();
            }
        } else {
            return;
        }
        

    }

    render () {
       
        return (
            <div style={GameStyle}>
                <div>  asdasdsd {dif}  </div>
                <table class="Table">
                    <tbody>
                        <tr>
                            <td className="Cell"> {this.renderCell(0)} </td>
                            <td className="Cell"> {this.renderCell(1)} </td>
                            <td className="Cell"> {this.renderCell(2)}</td>
                            <td className="Cell"> {this.renderCell(3)}</td>
                            <td className="Cell"> {this.renderCell(4)}</td>
                            <td className="Cell"> {this.renderCell(5)}</td>
                            <td className="Cell"> {this.renderCell(6)}</td>
                            <td className="Cell"> {this.renderCell(7)}</td>
                            <td className="Cell"> {this.renderCell(8)}</td>
                            <td className="Cell"> {this.renderCell(9)}</td>

                        </tr>
                        <tr>
                            <td className="Cell"> {this.renderCell(10)} </td>
                            <td className="Cell"> {this.renderCell(11)} </td>
                            <td className="Cell"> {this.renderCell(12)}</td>
                            <td className="Cell"> {this.renderCell(13)}</td>
                            <td className="Cell"> {this.renderCell(14)}</td>
                            <td className="Cell"> {this.renderCell(15)}</td>
                            <td className="Cell"> {this.renderCell(16)}</td>
                            <td className="Cell"> {this.renderCell(17)}</td>
                            <td className="Cell"> {this.renderCell(18)}</td>
                            <td className="Cell"> {this.renderCell(19)}</td>

                        </tr>
                        <tr>
                            <td className="Cell"> {this.renderCell(20)} </td>
                            <td className="Cell"> {this.renderCell(21)} </td>
                            <td className="Cell"> {this.renderCell(22)}</td>
                            <td className="Cell"> {this.renderCell(23)}</td>
                            <td className="Cell"> {this.renderCell(24)}</td>
                            <td className="Cell"> {this.renderCell(25)}</td>
                            <td className="Cell"> {this.renderCell(26)}</td>
                            <td className="Cell"> {this.renderCell(27)}</td>
                            <td className="Cell"> {this.renderCell(28)}</td>
                            <td className="Cell"> {this.renderCell(29)}</td>

                        </tr>
                        <tr>
                            <td className="Cell"> {this.renderCell(30)} </td>
                            <td className="Cell"> {this.renderCell(31)} </td>
                            <td className="Cell"> {this.renderCell(32)}</td>
                            <td className="Cell"> {this.renderCell(33)}</td>
                            <td className="Cell"> {this.renderCell(34)}</td>
                            <td className="Cell"> {this.renderCell(35)}</td>
                            <td className="Cell"> {this.renderCell(36)}</td>
                            <td className="Cell"> {this.renderCell(37)}</td>
                            <td className="Cell"> {this.renderCell(38)}</td>
                            <td className="Cell"> {this.renderCell(39)}</td>

                        </tr>
                        <tr>
                            <td className="Cell"> {this.renderCell(40)} </td>
                            <td className="Cell"> {this.renderCell(41)} </td>
                            <td className="Cell"> {this.renderCell(42)}</td>
                            <td className="Cell"> {this.renderCell(43)}</td>
                            <td className="Cell"> {this.renderCell(44)}</td>
                            <td className="Cell"> {this.renderCell(45)}</td>
                            <td className="Cell"> {this.renderCell(46)}</td>
                            <td className="Cell"> {this.renderCell(47)}</td>
                            <td className="Cell"> {this.renderCell(48)}</td>
                            <td className="Cell"> {this.renderCell(49)}</td>

                        </tr>
                    </tbody>
                </table>
            </div>


        );
    }
}

export default Gameboard;