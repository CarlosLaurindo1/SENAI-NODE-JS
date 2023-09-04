import express from 'express';

const app = express();

app.listen(3000, () =>
console.log('Servidor iniciado na porta 3000')
);

app.get('/sobre', (req, res) =>
  res.send('<h1 style="color: blue">Página Sobre</h1>')
);