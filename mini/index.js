const express = require('express')
const uglify = require('uglify-js')
const route = express.Router();

route.post('/', (req, res) => {
  var code = uglify.minify(req.body.code)
  res.send(code)
})

module.exports = route