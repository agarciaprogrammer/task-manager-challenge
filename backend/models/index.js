const Task = require('./Task');
const Category = require('./Category');
const User = require('./User');

// Una tarea pertenece a una categoría (opcional)
Task.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Task, { foreignKey: 'categoryId' });

// Una tarea puede pertenecer a un usuario (opcional si se implementa login)
Task.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Task, { foreignKey: 'userId' });

module.exports = { Task, Category, User };
