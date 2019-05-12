import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstDie: 'one',
            secondDie: 'two',
            loading: false
        }
        this.randomNumber = this.randomNumber.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
    }

    randomNumber() {
        const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
        const random = Math.floor(Math.random()*numbers.length);
        console.log(random);
        return numbers[random];
    }

    changeNumber() {
        const firstNumber = this.randomNumber();
        this.setState({firstDie: firstNumber});
        const secondNumber = this.randomNumber();
        this.setState({ secondDie: secondNumber });

        this.addAnimation();
        setTimeout(() => {
            this.removeAnimation();
        }, 1000);

    }

    addAnimation = () => {
        document.querySelector(".RollDice-dice").classList.add('animated', 'shake');
        document.querySelector(".RollDice-button").classList.add('loading');
        this.setState({ loading: true });

    }

    removeAnimation = () => {
        document.querySelector(".RollDice-dice").classList.remove('animated', 'shake');
        document.querySelector(".RollDice-button").classList.remove('loading');
        this.setState({ loading: false });
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dice">
                    <Die number={this.state.firstDie} />
                    <Die number={this.state.secondDie} />
                </div>
                {this.state.loading ? 
                    <button className="RollDice-button">Rolling ....</button> :
                    <button onClick={this.changeNumber} className="RollDice-button">Roll Dice!</button>
                }
            </div>
        )
    }
}

export default RollDice;