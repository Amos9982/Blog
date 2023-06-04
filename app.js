const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://user123:mongodb123@cluster0.yxtiijx.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))//console.log('Connected to Database'))
  .catch((err) => console.log(err)); 

//register view set engine
app.set('view engine', 'ejs'); //will auto find ejs views

//middleware and static files, static files example: css, images
app.use(express.static('public')); //makes files public, able to view through browser
app.use(express.urlencoded({ extended: true })); //to accept form data
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  //res.send('<p>home page</p>');
  //res.sendFile('./views/index.html', { root: __dirname }); express method to find file
  res.redirect('/blogs');
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
})

//blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) =>{
  //res.status(404).sendFile('./views/404.html', { root: __dirname }); //express method for view file
  res.status(404).render('404', { title: '404'});
})