const User = require('../models/user');

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'Usuario creado', user });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario', details: error });
    }
};

// Obtener todos los usuarios, aca lo hice con usuarios,
//  la pregunta es: si quisiera agregar productos(ejemplo) u otros modelos debo hacerlo en otro 
// archivo como por ejemplo productsControllers o se puede hacer todo en la misma carpeta como en este
// me gustaria variar este codigo y agregarle productos u otras variantes 
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los usuarios', details: error });
    }
};

module.exports = { createUser, getUsers };