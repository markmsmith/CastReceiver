var express = require("express")
	, path = require('path');

var app = express();
app.use(express.logger());

var publicDir = path.join(__dirname, 'public')
app.use( express.static(publicDir) );

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});