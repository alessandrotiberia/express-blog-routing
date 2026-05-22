import express, { response } from 'express';
import { error } from 'node:console';
import { Router } from 'express';
//import posts from './routers/routers/posts';

const app = express();
const port = process.env.SERVER_PORT || 3000;


app.listen(port, (error) => {

    if (error) {
        console.error("errore caricamento porta");
        return;
    }
    console.log(`server aperto nella porta ${port}`);
    
});