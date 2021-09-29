import React, { Component } from "react";

class Card extends Component {
  state = {
    flipped: false,
  };


  flipSprite = () => {
    this.setState({
      flipped: !this.state.flipped,
    })
  };


  render() {
    const { flipped } = this.state;
    const { name, hp, sprites } = this.props.pokemon;

    return (
      <div className="card">
        <img src={flipped ? sprites.back : sprites.front} alt="" />

        <p>{name}</p>
        <p>HP: {hp}</p>
        <button onClick={this.flipSprite}>Flip</button>
      </div>
    );
  }
}

export default Card;