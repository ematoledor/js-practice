const team = {
  _players: [
    {firstName: 'Emanuel', lastName: 'Toledo', age: 54},
    {
      firstName: 'Gerardo',
      lastName: 'Toledo',
      age: 26
    },
    {
      firstName: 'Emanuel',
      lastName: 'Ramirez',
      age: 55
    } 
  ],
  _games: [
    {
      opponent: 'Steelers',
      teamPoints: 22,
      opponentPoints: 40
    },
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Pirates',
      teamPoints: 33,
      opponentPoints: 19
    }
  ],
  
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(opponent, myPoints, oppPts) {
    const game = {
      opponent: opponent,
      teamPoints: myPoints,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 98);
team.addGame('Knicks', 80, 68);
team.addGame('Bulls', 120, 40);
console.log(team.players);
console.log(team.games);