const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET/POST/PUT/DELETE

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);
routes.post(
    "/boxes/:id/files",
    multer(multerConfig).single("file"),
    FileController.store); // se utilizar array no lugar do single é permitido fazer mais de um upload por vez


module.exports = routes; 