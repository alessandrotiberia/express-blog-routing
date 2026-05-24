import { Router } from "express";
import { index, show, create } from "../../controllers/posts";

//  conterrà le rotte necessario per l'entità post.
const router = express.Router();


// nome rotta index 
router.get('/', index);
router.get('/:id', show);
//create
router.post('/', create);


export default router;