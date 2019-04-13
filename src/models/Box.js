const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    // Declara que o campo de titulo deve ser obrigatório.
    title: {
        type: String,
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]
}, {
        timestamps: true,
    });

module.exports = mongoose.model('Box', Box);
