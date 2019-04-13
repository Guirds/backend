const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),// setando o caminho onde vai ser salvo os arquivos de upload
    storage: multer.diskStorage({ //para armazenar os arquivos no disco local
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString("hex")}-${file.originalname}`

                cb(null, file.key);
            });
        },
    })
};