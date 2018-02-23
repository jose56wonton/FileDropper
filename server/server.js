const express    = require('express');       
const app        = express();                
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/filedropper');
mongoose.connection.on('error', function() {
    console.log('Database connection failed');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Database connection successful");
})
let db = mongoose.connection;





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/session.route')(app);

app.get('/', function(req, res) {
    res.send("Please use /api");   
});




const port = process.env.PORT || 4000;  
app.listen(port);
console.log('Running on ' + port);