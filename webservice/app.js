//
// import packages...
//
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//
// configure middleware...
//
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//
// login handler...
//
app.post('/login', function(req, res) {
 
    //
    // the actual web service will have real authentication, this is a stub for dev...
    //

    if ( req.body.username == 'test' && req.body.password == 'test' )
    {
    	res.end("login ok.");
    }
    else
    {
	res.end("login failed.")
    }
});

//
// logout handler...
//
app.post('/logout', function(req, res) {

    //
    // the actual web service will have real authentication, this is a stub for dev...
    //

    if ( req.body.session ) 
    {
	res.end("logout ok.")
    }
    else
    {
	res.end("logout failed.");
    }
});

//
// upload image handler...
//
app.post('/upload', function(req,res) {

    //
    // the actual web service will push the uploaded data to the AI pipeline, this is a stub for dev...
    //

    if ( req.body.photo && req.body.art )
    {
	setTimeout( function(res) {
			return function() { 
				console.log("upload ok");
				res.sendfile("data/neural_olgamayer.png");
				//res.end("upload ok.");
			};
		     } (res), 1000 );
    }
    else
    {
        res.end("upload failed.");
    }

});


//
// start the server
//
app.listen(port);
console.log('Server started! At http://localhost:' + port);

