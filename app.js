const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const path = require('path');
const views_path = path.join(__dirname, './templates/views');
const partials_path = path.join(__dirname, './templates/partials');
const public_path = path.join(__dirname, './public')
const files_path = path.join(__dirname, './public/files')
const css = path.join(__dirname, './node_modules/bootstrap/dist/css');
const js = path.join(__dirname, './node_modules/bootstrap/dist/js');
const jquery = path.join(__dirname, './node_modules/jquery/dist');
app.use(express.urlencoded({extended: false}));

console.log(views_path);
console.log(partials_path);
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

app.listen(port, () => {
    console.log('LISTENING TO SERVER' + port);
});
