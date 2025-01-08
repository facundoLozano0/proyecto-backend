const mongoose = require('mongoose');

// esquema de usuario
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

// Crear y exportar usuario
const User = mongoose.model('User', userSchema);

module.exports = User;