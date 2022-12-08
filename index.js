const express = require("express");
const app = express();
app.use(express.static("./public"));
const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(8000, () => console.log("http://localhost:8000"));
const { give, meet } = require('./listEvent');
const { specialStatus, status } = require('./listStatus');
const { skill } = require('./listSkill');

const listPlayer = [];
const listEvent = [
  {
    type: 'off',
    actionType: [
      {
        id: 1,
        type: 'nhatjw',
        array: give
      },
      {
        id: 2,
        type: 'gawp',
        array: meet
      }
    ]
  }
]

const roll = (max, age = 10, lck = 0) => { 
  const temp =  Math.floor(Math.random() * (age + lck / 10));
  return temp > (max - 1) ? (max - 1) : temp;
}

io.on("connection", (e) => {
  listPlayer.push({
    id: e.id,
    name: ''
  });
  console.log(`hi ${e.id}`);
  e.on("disconnect", () => {
    const indexTemp = listPlayer.findIndex(i => i.id === e.id);
    listPlayer.splice(indexTemp, 1);
    io.sockets.emit('playerJoin', listPlayer);
    console.log(`bye ${e.id}, ${indexTemp}`);
  });

  e.on("isekai", (name) => {
    const indexTemp = listPlayer.findIndex(i => i.id === e.id);
    listPlayer[indexTemp].name = name;
    const spe = roll(101, 101);
    let status = null;
    if (spe >= 80) {
      status = specialStatus[roll(9) + 1];
    }
    io.sockets.emit('playerJoin', listPlayer);
    e.emit('returnPlayer', {
      id: e.id,
      status: status
    });
  });

  e.on('startEvent', user => {
    const { age, lck } = user;
    const listEventN = listEvent.length;
    const listEventC = roll(listEventN, listEventN, 0);
    const actionTypeN = listEvent[listEventC].actionType.length;
    const actionTypeC = roll(actionTypeN, actionTypeN, 0);
    const temp = roll(100 + lck / 10, 100 + lck / 10, lck) + 1;
    const arrayC = listEvent[listEventC].actionType[actionTypeC].array.findIndex((item, index) => (item.rate + (lck / 10) * index) >= temp);
    const actionN = listEvent[listEventC].actionType[actionTypeC].array[arrayC].action.length;
    const actionC = roll(actionN, age, lck);
    const effectN = listEvent[listEventC].actionType[actionTypeC].array[arrayC].action[actionC].effect.length;
    const effectC = roll(effectN, effectN, lck);
    e.emit('getEvent', listEvent[ listEventC].actionType[actionTypeC].array[arrayC].action[actionC].effect[effectC]);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

// io.sockets.emit: send all
// socket.broadcast.emit: send all trừ người gửi
// socket.emit: send người gửi
// io.to("socketId").emit: send socketId
