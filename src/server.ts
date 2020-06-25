import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.send('Hallo Welt');
});

app.listen(3333);