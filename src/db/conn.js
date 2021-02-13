const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/businessportfolio',
    {
        useCreateIndex: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((val) => {
    console.log('connected to server');
}).catch((err) => {
    console.log('there is some error in server');
});