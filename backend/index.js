const express = require('express');
const cors = require('cors');
const neumaticosRoutes = require('./routes/neumaticosRoutes');
const Neumatico = require('./models/neumatico');

const app = express();

app.use(cors());
app.use(express.json());

Neumatico.createTable();

app.use('/neumaticos', neumaticosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
