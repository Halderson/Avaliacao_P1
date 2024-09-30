const mongoose = require('mongoose');

// Definir os schemas + modelos
const TarefaSchema = { 
  titulo: String,
};

module.exports = mongoose.model('Titulo', TarefaSchema);