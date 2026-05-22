import express, { response } from 'express';
import { error } from 'node:console';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/', (request, response) => {


});

app.listen(port, (error) => {

    if (error) {
        console.error("errore caricamento porta");
        return;
    }
    console.log(`server aperto nella porta ${port}`);
    
});