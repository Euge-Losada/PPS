const Neumatico = require('../models/neumatico');

const NeumaticosController = {
  getAll: (req, res) => {
    Neumatico.getAll((err, neumaticos) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(neumaticos);
    });
  },

  create: (req, res) => {
    const neumatico = req.body;
    Neumatico.create(neumatico, (err, id) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id });
    });
  },

  update: (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Neumatico.update(id, data, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ message: 'Neumático no encontrado' });
    res.json({ message: 'Neumático actualizado' });
  });
},

delete: (req, res) => {
  const id = req.params.id;
  Neumatico.delete(id, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ message: 'Neumático no encontrado' });
    res.json({ message: 'Neumático eliminado' });
  });
},

};

module.exports = NeumaticosController;
