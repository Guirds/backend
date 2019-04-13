const mongoose = require('mongoose');

const File = new mongoose.Schema({
    // Declara que o campo de titulo deve ser obrigatório.
    title: {
        type: String,
        required: true,
    },
    path: { //nome do arquivo fisico armazenado na app
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });

File.virtual('url').get(function () {
    const url = process.env.URL || 'http://localhost:3333'

    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);
