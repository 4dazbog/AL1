//
// import packages...
//
var express = require('express');
var multiparty = require('multiparty');

//
// create the app...
//
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
    	res.end("login ok, session=FAFAFAFA");
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
app.post('/upload', function(req,res,next) {

  // create a form to begin parsing
  var form = new multiparty.Form();
  var image;

  // invoke next in handler chain...
  form.on('error', next);

  // callback for upload done event...
  form.on('close', function(){
    
	console.log("upload done, processing images...");

	//
	// stub for now...
	//
	setTimeout( function(res) {
                        return function() {
                                console.log("upload ok");
                                res.sendfile("data/neural_olgamayer.png");
                        };
                     } (res), 1000 );

  });

  // listen for fields...
  form.on('field', function(name, val){
	console.log("upload got field", name, val );
  });

  // listen on part event for files...
  form.on('part', function(part){
    console.log('upload got file',part.name);
    if (!part.filename) return;
    image = {};
    image.filename = part.filename;
    image.size = 0;
    part.on('data', function(buf){
      image.size += buf.length;
    });
  });

  // parse the form
  form.parse(req);

});


//
// start the server
//
app.listen(port);
console.log('Server started! At http://localhost:' + port);

