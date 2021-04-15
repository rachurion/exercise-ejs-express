// OUR "BBDD" 
var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
];

// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {

    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

//form page

app.get('/add-mascot', function(req, res) {
    res.render('pages/form');
});

app.post('/add-mascot', function(req, res) {
    let newMascot = { name: req.body.name, organization: req.body.organization, birth_year: req.body.year};
    mascots.push(newMascot)
    res.redirect('/')
});


app.listen(8080);
// console.log('8080 is the magic port');
