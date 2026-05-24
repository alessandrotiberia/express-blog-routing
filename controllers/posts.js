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

}

function create(request, response) {

    //Se valore di id non è numero allora conversione fallita mess errore
    if (isNaN(okId)) {
        response.status(404)
            .json({
                error: "id non corretto",
                results: null
            });
        return;
    }

    if (okId <= 0) {
        response.status(404)
        .json({
           error:"id negativo o uguale a 0",
           results : null
        });
        return;
    }
}



export {
    index,
    show,
    create
};



