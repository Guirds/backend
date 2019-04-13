const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create(req.body); // OU ({ title: req.body.title }); caso tenha mais de uma propriedade no body

        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            option: {
                sort: {
                    createdAt: -1
                }
            }
        });

        return res.json(box);
    }
}

module.exports = new BoxController(); // new para ter acesso aos metodos da classe, sem ele não seria possivel