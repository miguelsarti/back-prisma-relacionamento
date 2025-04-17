import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todos as coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /colecoes/:id - Obter uma coleção pelo ID
collectionRouter.get("/:id", CollectionController.getCollectionById);

// POST /colecoes- Criar uma nova coleção
collectionRouter.post("/", CollectionController.createCollection);

// PUT /colecoes/:id - Atualizar uma coleção
collectionRouter.put("/:id", CollectionController.updateCollection);

// DELETE /colecoes/:id - Remover uma coleção
collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;    
