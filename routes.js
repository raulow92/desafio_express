const express = require('express')
const fs = require('fs');
const router = express.Router()

// Consultar canciones
router.get('/canciones', (req, res) => {
    const canciones = JSON.parse(fs.readFileSync('repertorio.json','utf-8'));
    res.json(canciones);
});

// Crear canciones
router.post('/canciones', (req, res) => {
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'));
    canciones.push(cancion);
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
    res.send('Canción agregada con éxito!');
});

// Eliminar canciones
router.delete('/canciones/:id', (req, res) => {
    const { id } = req.params;
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'));
    const index = canciones.findIndex((p) => p.id == id);
    canciones.splice(index, 1);
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
    res.send('Canción eliminada con éxito');
});

// Editar canciones
router.put('/canciones/:id', (req, res) => {
    const { id } = req.params;
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'));
    const index = canciones.findIndex((p) => p.id == id);
    canciones[index] = cancion;
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
    res.send('Canción modificada con éxito');
});

// Enlace página principal
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

module.exports = router
