const Uglify = require('uglify-js');
const data = require('./mini/index')
var cors = require('cors')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + "/views"));
app.get('/', (req,res) => {
  res.render('index.ejs')
});
app.use('/v1/result', data)
app.listen(PORT, () => {
  console.log(`Server online on Port: ${PORT}`)
});