const express = require('express'),
      morgan = require('morgan');

var app = express();
    port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// render page -----------------------------------------------------------------

app.get('/', (req, res) => {
  res.render('index');
});

// start server ----------------------------------------------------------------

app.listen(port, () => {
  console.log('server is now running at ' + port);
});
