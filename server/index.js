const
    express = require("express"),
    app = express(),
    fs = require('fs');

app.get('/main.css', (request, response) => {
    fs.readFile('./static/main.css', (error, page) => {
        response.write(page);
        response.end();
    });
});

app.get('/main.js', (request, response) => {
    fs.readFile('./static/main.js', (error, page) => {
        response.write(page);
        response.end();
    });
});

app.get('/*', (request, response) => {
    fs.readFile('./static/index.html', (error, page) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(page);
        response.end();
    });
});

app.listen(3002);
