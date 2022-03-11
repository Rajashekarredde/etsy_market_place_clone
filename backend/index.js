const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "EtsyClone",
});

app.use(cors());
app.use(express.json());
app.use( bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{});

app.post("/api/changePreferedCurrency", (req, res)=>{
    console.log("sunny hith reddy");
    const sqlInsert = "UPDATE users SET prefered_currency = ? WHERE id = ? "
    db.query( sqlInsert, [req.body.userPreferedCurrency, req.body.userId], (err, result)=>{
       console.log(err)
    })
});

app.listen(3001, ()=>{
console.log("sunny");
db.connect( (err)=>{
   if(err) throw err;

   console.log('database connected !')  ; 
   })
});