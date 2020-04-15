// Team will be a reference to players, not a copy
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;

// If u wanna copy it, there r multiple ways...
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

// Let's make it clear, this will only copy the external date, if there r more non-native objects in it, they will still as references

// Now try it with objects
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

// This one is quite tricky, create a Object, turn it into a string and then turn it back... wtf
const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));
