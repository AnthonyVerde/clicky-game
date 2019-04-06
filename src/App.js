import React, { Component } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Card from "./components/Card";
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
    this.state.cards.forEach(card => {
      card.count = 0;
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
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Container
    >
        <Header score={this.state.score} highscore={this.state.highscore}>CLICKY GAME</Header>
        <Instructions>The goal is to click on all the images below without clicking the same image more than once. To make things trickier, the images are shuffled after each click. Good luck!</Instructions>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            imageUrl={card.imageUrl}
          />
        ))}
      </Container>
    );
  }
}

export default App;
