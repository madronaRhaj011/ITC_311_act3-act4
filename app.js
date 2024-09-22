const bodyParser = require('body-parser');
const express = require('express');
const router = require('./route/router');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', router);

app.listen(3000, ()=> {
    console.log("server initialized on http://localhost:3000");
    
})