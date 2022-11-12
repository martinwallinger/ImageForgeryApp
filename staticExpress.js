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

//Storage for multer to download files
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

//Send when client sends form post
app.post('/upload', upload.single('image'), (req, res) => {
	//Download image and get the filename
	var imagepath = req.file.path
	var output
	
	let options = {
		mode: 'text',
		pythonOptions: ['-u'], // get print results in real-time
		scriptPath: './python',
		args: [imagepath]
	};

	//Run interface python script with the image
	PythonShell.run('./interface.py', options, function(err, results){
		if (err) { output = err; throw err; }
		output = results[2]
		console.log(output)
		//Send back results to client
		res.send(output)
	})
})

var server = app.listen(3000, function () {
    var port = server.address().port
    console.log('Server started at http://localhost:%s', port)
})
  
