const express = require('express');
const app = express()

require("dotenv").config({
    path: "./.env",
  });

const port = process.env.PORT || 3000;

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

// Views
app.set('Views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, ()=> console.info(`listening on port ${port}`))