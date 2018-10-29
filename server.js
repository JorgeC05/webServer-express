const express = require('express');
const app = express();
const hbs = require('hbs');
 
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getYear',()=>{
    return new Date().getFullYear();
});

// Se comenta este código para que no tenga conflictos con el middleware de arriba
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jorge',       
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
    });
});


app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${port}`);
});