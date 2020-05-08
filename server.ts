var express = require('express');
var faker = require('faker');
var path = require('path');
// use （npm install faker )
var app = express();
export class MyServer {

    private theDatabase : any;

    // Server stuff: use express instead of http.createServer
    private server = express();
    private port = 8080;
    private router = express.Router();

    constructor(db) {
	this.theDatabase = db;
	// from https://enable-cors.org/server_expressjs.html
	this.router.use((request, response, next) => {
	    response.header('Content-Type','application/json');
	    response.header('Access-Control-Allow-Origin', '*');
	    response.header('Access-Control-Allow-Headers', '*');
	    next();
	});
	// Serve static pages from a particular path.
	this.server.use('/', express.static('./html'));
	// NEW: handle POST in JSON format
	this.server.use(express.json());



var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile('forum.html', {root: path.join(__dirname)});
});

 app.post('/post', async function (req, response) {

    var post = JSON.parse(req.body);

    console.log("creating post named '" + post.title + "'");

    //await this.theDatabase.put(post, 0);
    
	response.write(JSON.stringify({'result' : 'created',
				       'name' : post.title,
				       'value' : 0 }));
	response.end();

    response.send(post.title + ' Submitted Successfully!');

});

app.listen(8080);
    }}