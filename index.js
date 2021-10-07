const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["you will get a million dollars tomorrow",
    "you are about to get a big prize",
    "you will gain a new talent",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});

app.get("/api/number", (req, res) => {
  const numbers = ["93",
    "53",
    "87",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * numbers.length);
  let randomNumber = numbers[randomIndex];

  res.status(200).send(randomNumber);

});


app.get("/api/date", (req, res) => {
  let currentDate = new Date();
  let currentTime = + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds();

  res.status(200).send(currentTime);
});




app.listen(4000, () => console.log("Server running on 4000"));
