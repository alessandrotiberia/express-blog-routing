import { error } from "node:console";
import posts from "../imgs/posts/posts";
import { markAsUncloneable } from "node:worker_threads";


function index(request, response) {
    response.json(posts);
}

function show(request, response) {
    // prendo id da url
    const { id } = request.params;
    //converto in number e tolgo spazi vuoti trim 
    const okId = Number(id.trim());

    //Se valore di id non è numero allora conversione fallita mess errore
    if (isNaN(okId)) {
        response.status(404)
            .json({
                error: "id non corretto",
                results: null
            });
        return;
    }
    // se id è negativo eseguiamo un controllo
    if (okId <= 0) {
        response.status(404)
            .json({
                error: "id negativo o uguale a 0",
                results: null
            });
        return; // sempre fuori dalla condizione per bloccare funzione
    }

    // cerco id dentro array posts dato dal docente un oggetto che ha stesso id
    const idFound = id.find(posts => {
        return idFound === okId
    });

    // controllo se non trovo id dico undefined
    if (idFound === undefined) {
        response.status(404)
            .json({
                error: 'risultato non trovato o non corrisponde',
                results: null
            });
        return;
    }
}

function create(request, response) {
    response.json({
        results: 'creato correttamente'

    });
    return;
}

function destroy(request, response) {
    // Recupero l'id dai parametri per usarlo nel messaggio
    const { id } = request.params;

    // Restituisco solo un messaggio di conferma
    response.json({
        results: `Cancellazione del post ${id}`
    });
    return;
}

function update(request, response) {
    response.json({
        results: 'modificato correttamente'
    });
    return;
}

export {
    index,
    show,
    create,
    destroy,
    update
};



