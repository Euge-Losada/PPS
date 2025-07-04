const db = require('../database');

const Neumatico = {
  createTable: () => {
    const sql = `CREATE TABLE IF NOT EXISTS neumaticos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      marca TEXT,
    modelo TEXT,
    medida TEXT,
    stock INTEGER,
    tipo_vehiculo TEXT,
    ubicacion_deposito TEXT,
    anio_fabricacion INTEGER,
    condicion TEXT
    )`;
    db.run(sql);
  },

  getAll: (callback) => {
    db.all('SELECT * FROM neumaticos', [], (err, rows) => {
      callback(err, rows);
    });
  },

  create: (neumatico, callback) => {
    const { marca, modelo, medida, precio, stock } = neumatico;
    const sql = `INSERT INTO neumaticos (marca, modelo, medida, stock, tipo_vehiculo, ubicacion_deposito, anio_fabricacion, condicion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [marca, modelo, medida, stocktipo_vehiculo, ubicacion_deposito, anio_fabricacion, condicion], function (err) {
      callback(err, this.lastID);
    });
  },

  update: (id, data, callback) => {
  const {
    marca,
    modelo,
    medida,
    stock,
    tipo_vehiculo,
    ubicacion_deposito,
    anio_fabricacion,
    condicion
  } = data;

  const sql = `
    UPDATE neumaticos SET
      marca = ?,
      modelo = ?,
      medida = ?,
      stock = ?,
      tipo_vehiculo = ?,
      ubicacion_deposito = ?,
      anio_fabricacion = ?,
      condicion = ?
    WHERE id = ?
  `;

  db.run(sql, [
    marca,
    modelo,
    medida,
    stock,
    tipo_vehiculo,
    ubicacion_deposito,
    anio_fabricacion,
    condicion,
    id
  ], function (err) {
    callback(err, this.changes);
  });
},

    delete: (id, callback) => {
    const sql = `DELETE FROM neumaticos WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, this.changes);
    });
    },

};

module.exports = Neumatico;
