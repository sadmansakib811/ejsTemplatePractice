const express = require('express');
//const https = require('node:https');
const bodyParser = require ('body-parser');
const app = express();

const port = 3000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {


  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  
  var today = new Date();
  let day = weekday[today.getDay()];
res.render('list', {kindofday: day});
})



app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening on port ${port}`)
})
