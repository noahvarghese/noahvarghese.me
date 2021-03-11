const mysql  = require('mysql');
const express = require ('express');
const { Console } = require('console');
var app = express();
const bodyparser = require('body-parser');

//const {  connect} = require('http2');
//const {resolve = require('path');require("dotenv").config();
require('dotenv').config({path: 'C:/Users/anita/athios/athios_server/.env_blank'});

console.log(process.env);

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

const connectToDB = () => {
    return new Promise((resolve, reject) => {
        connection.connect(function (error) {
            if (error) {
                console.error('Error connecting to ' + connection.database + ':' + JSON.stringify(error, undefined, 2));
                reject(false);
            }

            console.log('Connection established successfully with id :' + JSON.stringify(connection.threadId, undefined, 2));
            resolve(true);
        });
    });
}

const closeConnectionToDB = () => {
    return new Promise((resolve, reject) => {
        connection.end((err) => {
            if (err) {
                console.error(err);
                reject(false);
            }

            resolve(true);
        });
    });
}
 
app.use(bodyparser.json());
//connection.connect(function(error) {
   // if (error) {
     // console.error('Error connecting to ' + database  +  ':' + JSON.stringify(error, undefined, 2));
     // return;
   // }
   
    //console.log('Connection established successfully with id :' + JSON.stringify(connection.threadId,undefined,2));
  //});

app.listen(8000,()=>console.log('Express Server is runnig at port number 8000.'));

//Get all users
//app.get('/user',(_req,_res) =>{
   // connection.query("SELECT * FROM user",(error, _rows, _fields) =>{{
        //if(!error)
        //_res.send(_rows);
       // else
      //  console.log(error);
    //}})
//});

//Get all users
app.get('/user', async (_req, _res) => {
    try {
        await connectToDB();
        console.log("post connect");
        connection.query("SELECT * FROM user", (error, _rows, _fields) => {
            if (!error)
                _res.send("Display all user records.");
            else
                console.log(error);
        });
    } catch (e) {}
    await closeConnectionToDB();
});
console.log(connection);
// Get user by id  
app.get('/user/:id',(_req,_res) =>{
    connection.query("SELECT * FROM user WHERE user_id = ?",[_req.params.id],(error, _rows, _fields) =>{{
        if(!error)
        _res.send(_rows)
        else
        console.log(error);
    }})
});

// Delet user by id  
app.delete('/user/:id',(_req,_res) =>{
    connection.query("SELECT * FROM user WHERE user_id = ?",[_req.params.id],(error, _rows, _fields) =>{{
        if(!error)
        _res.send("Deleted Successfully.");
        else
        console.log(error);
    }})
});

// Insert user by id  
app.post('/user',(_req,_res) =>{

    let userName = _req.query.user_name;
    let userPass = _req.query.user_pass;
    let email = _req.query.e_mail;
    let regName = _req.query.reg_name;
    let regDate = _req.query.reg_date;
    let params = [userName, userPass, email,regName, regDate];
    let sql = "INSERT INTO user (user_name, user_pass , e_mail , reg_name, reg_date) VALUES ('?','?','?','?', '?')";
    connection.query(sql,params,(error, _rows, _fields) =>{{
        if(!error)
        _res.send("User add..");
        else
        console.log(error);
    }})
});

// Update user by id  
app.put('/user/:id',(_req,_res) =>{

    let userName = _req.query.user_name;
    let userPass = _req.query.user_pass;
    let email = _req.query.e_mail;
    let regName = _req.query.reg_name;
    let regDate = _req.query.reg_date;
    let params = [userName, userPass, email,regName, regDate];
    //connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId]
   // let sql = "UPDATE user SET user_name = ?, user_pass =? , e_mail = ? , reg_name = ?, reg_date = ? WHERE user_id = ?";
    connection.query('UPDATE user SET user_name = ?, user_pass =? , e_mail = ? , reg_name = ?, reg_date = ? WHERE user_id = ?', [params, _req.params.id],(error, _rows, _fields) =>{{
        if(!error)
        _res.send("User Updated.");
        else
        console.log(error);
    }})
});
//connection.end();
//./athios_server/src/lib/models/users.js