/** EJERCICIO CON HTTP NATIVO DE NODEJS */
 
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.write('Hola Mundo con NodeJs');
    let salida = {
        nombre: 'Jorge',
        edad: 26,
        url: req.url
    }
    res.write(JSON.stringify(salida)); // Envia la info en formato JSON

    res.end();
})
    .listen(8080);

console.log('Escuchando el Puerto 8080');

