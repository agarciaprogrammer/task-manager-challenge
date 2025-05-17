// backend/controllers/category-controller.js
const { Category } = require('../models');

const categoryController = {
  // Crear nueva categoría
  async createCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la categoría', error });
    }
  },

  // Obtener todas las categorías
  async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
  },

  // Actualizar una categoría por ID
  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.findByPk(id);
      if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });

      category.name = name;
      await category.save();
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
  },

  // Eliminar una categoría por ID
  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });

      await category.destroy();
      res.json({ message: 'Categoría eliminada' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
  },
};

module.exports = categoryController;
