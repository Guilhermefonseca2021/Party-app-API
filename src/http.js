const http = require('http')

const port = 3000;

const server = http.createServer((request, response) => {
    if (request.url == '/home' ) {
        // writeHEAD roda o status code e o tipo do conteudo da pagina
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1>Home page<h1>'); // enviar conteudo
    }

    if (request.url == '/users') {
        const users = [
            {
                name: 'Guilherme',
                email: 'juih@gmail.com',
            },
            {
                name: 'Jhon',
                email: 'jhonbb@gmail.com',
            }
        ]

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`listen at ${port}!`))