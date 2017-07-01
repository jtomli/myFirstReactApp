var express = require('express');
var dbRoutes = require('./routes/databaseAccess.js');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
var bodyParser = require('body-parser');
const app = express();


// This line makes the build folder publicly available.
app.use(express.static('build'));

app.use(bodyParser.json());

app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
