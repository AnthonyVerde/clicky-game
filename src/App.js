import React, { Component } from "react";
import imgCard from "./components/imgCard";
import gameContainer from "./components/gameContainer";
import gameHeader from "./components/gameHeader";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(imgCard => {
      imgCard.count = 0;
    });

    alert(`Looks like you clicked the same image twice! Start over! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a imgCard component for each imgCard object
  render() {
    return (
      <gameContainer>
        <gameHeader score={this.state.score} highscore={this.state.highscore}>Clicky Game</gameHeader>
        {this.state.cards.map(imgCard => (
          <imgCard
            clickCount={this.clickCount}
            id={imgCard.id}
            key={imgCard.id}
            imageUrl={imgCard.imageUrl}
          />
        ))}
      </gameContainer>
    );
  }
}

export default App;

