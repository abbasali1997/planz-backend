const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Movie = require('./mongoose-models/movie.model');
const User = require('./mongoose-models/user.model');

mongoose.connect("mongodb://localhost:27017/watchlist");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
      secret: 'thisisasecret',
      resave: false,
      saveUninitialized: true
    }))
  

app.get('/api/home', (req,res) => {
    console.log('home');
})

app.post('/api/register', (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if(err){
          console.log(err);
      } else {
          User.create({
              username,
              password: hash
          },(err, newUser) => {
              if(err){
                  console.log(err);
              }else{
                  req.session.user = newUser;
              }
          })
      }
  });
});

app.listen(3001, function(){
	console.log("server started");
});
