// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 800, points: 48, online: true },
// ];

// const getUserName = players.map((user) => user.name);
// console.log(getUserName);

// const getPoints = players.map((player) => ({
//   ...player,
//   points:Math.round(player.points*1.1)
// }));
// console.log(getPoints)

// const playerId = "player-4";
// const getUpdateTime = players.map(player=>
//     player.id===playerId ?{
//      ...player,
//      timePlayed:player.timePlayed+50
//     }  :player
// )
// console.log(getUpdateTime)

// const playerIsOnline = players.filter((player) => player.online);
// console.log(playerIsOnline);

// const playerIsNotOnline = players.filter((player) => !player.online);
// console.log(playerIsNotOnline);

// const userName="Ajax"
// const findUserName=players.find(player=>player.name===userName)
// console.log(findUserName)

// const assessTime=players.every(player=>player.timePlayed>200)
// console.log(assessTime)


const peoples = [
  { name: "John", age: 32, occupation: "programmer" },
  { name: "Jane", age: 26, occupation: "teacher" },
  { name: "Mike", age: 42, occupation: "engineer" },
  { name: "Emily", age: 17, occupation: "designer" },
];
const getAges=peoples.map(people=>
    people.age > 18 ?people.name:undefined
)
console.log(getAges)


// const getUpdateTime = players.map(player=>
//     player.id===playerId ?{
//      ...player,
//      timePlayed:player.timePlayed+50
//     }  :player
// )