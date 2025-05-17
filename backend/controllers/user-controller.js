// backend/controllers/user-controller.js
const { User } = require('../models');

const userController = {
  // Crear un nuevo usuario
  async createUser(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.create({ username, password }); // ¡No uses password plano en producción!
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
  },

  // Obtener todos los usuarios (para debug o admin)
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
  },

  // Obtener un usuario por ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar el usuario', error });
    }
  }
};

module.exports = userController;
