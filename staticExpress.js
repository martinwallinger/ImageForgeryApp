var express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const {PythonShell} = require('python-shell')

var app = express()

app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/images', express.static(__dirname + '/public/images'))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

var pyInterface = '/python/interface.py'
var pyshell = new PythonShell(pyInterface)

app.post('/upload', upload.single('image'), (req, res) => {
	res.send(file.path)
})

var server = app.listen(80, function () {
    var port = server.address().port
    console.log('Server started at http://localhost:%s', port)
})
  
