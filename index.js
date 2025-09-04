const express = require('express');
const path = require('path')
const connect = require('./connection')
const user=require('./routes/jobseeker')
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(user)
connect();

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'));
app.use(express.static('public'))


app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on port 3000")
    }
})