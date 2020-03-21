const express = require('express');
const app = express();

//Settings
app.set('port', 3000);

//Routes
app.get('/', (req, res) => {
    res.send('index page');
});

app.get('/random/:numeroInicial/:numeroFinal', (req, res) => {
    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);
    
    //Validamos campos
    if (isNaN(min) || isNaN(max)) {
        res.status(404);
        res.json({"error": 'Bad request'});
        //Detener ejecución
        return;
    }

    //Generamos un numero aleatorio entre min y max y lo pasamos a entero
    const result = Math.floor(Math.random() * (max - min) + min);
    
    //Respondemos con un json
    res.json({"randomNumber": result});
    console.log(result);
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
