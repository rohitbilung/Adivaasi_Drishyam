const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 9999;
const path = require('path');
const cors = require('cors');
const db = require('./config/db');
const exphbs = require('express-handlebars');


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname,'./public')));

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set("view engine", "hbs");


app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log("server started at port "+port);
});