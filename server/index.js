// Portfolio
var express = require( 'express' );
var app = express();
var port = 4000;

app.use(express.static(__dirname+'/../public'));

app.listen( port, function () {
	console.log( 'listening on port ', port );
} );
