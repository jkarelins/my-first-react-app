import React, { Component } from "react";
import Player from "../player/Player";
import AddPlayer from "../addPlayer/AddPlayer";
import "./Scoreboard.css";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
  };

  renderPlayer = player => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        incrementScore={() => this.incrementScoreOfPlayer(player.id)}
      />
    );
  };

  incrementScoreOfPlayer = id => {
    const updatedPlayers = [...this.state.players].map(player => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      }
      return player;
    });
    this.setState({ players: updatedPlayers });
  };

  addPlayer = name => {
    const player = {
      id: this.state.players.length + 1,
      name,
      score: 0
    };
    this.setState({
      players: [...this.state.players, player]
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {[...this.state.players]
            .sort((a, b) => b.score - a.score)
            .map(player => this.renderPlayer(player))}
        </ul>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    );
  }
}
