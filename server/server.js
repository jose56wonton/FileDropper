const express    = require('express');       
const app        = express();  
let router = express.Router();              
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
// Initial mongodb connection
mongoose.connect('mongodb://localhost/filedropper');
mongoose.connection.on('error', function() {
    console.log('Database connection failed');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Database connection successful");
})
let db = mongoose.connection;

// Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
// Setup routes for session
require('./routes/session.route')(router);
require('./routes/upload.route')(router);
app.use('/api',router);

app.get('/', function(req, res) {
    res.send("Please use /api");   
});




const port = process.env.PORT || 4000;  
app.listen(port);
console.log('Running on ' + port);