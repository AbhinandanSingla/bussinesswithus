const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const hbs = require('hbs');
require('./db/conn');
const path = require('path');
const views_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');
const public_path = path.join(__dirname, '../public')
const css = path.join(__dirname, '../node_modules/bootstrap/dist/css');
const js = path.join(__dirname, '../node_modules/bootstrap/dist/js');
const jquery = path.join(__dirname, '../node_modules/jquery/dist');
app.use(express.urlencoded({extended: false}));

console.log(views_path);
// setting middlewares
app.use(express.static(public_path));
app.use('/css', express.static(css)); //now /css is route for bootstrap
app.use('/js', express.static(js)); //now /js is route for bootstrap
app.use('/jquery', express.static(jquery)); //now /jquery is route for bootstrap
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);
// setting routes
app.get('/', (req, res) => {
    res.render('index');
})
app.post('/register', async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
    const termsandconditions = req.body.termsandconditions;
    const confirmpassword = req.body.confirmpassword;
    if (password === confirmpassword && password !== '') {
        res.send('Thanks for contacting us');
    } else {
        res.alert('confirm password is not matching');
    }

})

app.listen(port, () => {
    console.log('LISTENING TO SERVER');
});
