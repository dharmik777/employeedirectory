const express = require('express');
const app = express();
const fetch = require("node-fetch")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getData', async (req, res) => {
    const result = await fetch("https://randomuser.me/api?results=100")
    const json = await result.json()
    console.log(json)
  res.status(200).send(json)

})


app.listen(8080);
