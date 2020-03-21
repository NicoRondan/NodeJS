const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const productsRoutes = require('./routes/products');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 4);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/products', productsRoutes);

//static files


//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})