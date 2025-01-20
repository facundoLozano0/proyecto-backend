const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/', createUser);

// Ruta para obtener todos los usuarios
router.get('/', getUsers);

module.exports = router;

// añado un PUT
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {nombre, email} = req.boodt;


    try {
        const usuarioActualizado = await User.findByIdAndUpdate(
            id,
            { nombre, email},
            { new:true }

        );
        if (!usuarioActualizado) {
            return res.status(404).send('usuario no encontrado');
        }
            res.json(usuarioActualizado);
    } catch (err) {
        res.status(500).send('Error al actualizar el usuario');
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const usuarioEliminado = await User.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            return res.status(404).send ('Usuario no encontrado');
        }
        red.send('Usuario con ID ${id} sera eliminado');
    } catch (err) {
        res.status(500).send('Error al eliminar el usuario');
    }
});