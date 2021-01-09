// @ts-check
const { Sequelize } = require('sequelize')
const taskInit = require('./Task')

const sequelize = new Sequelize('todolist', 'todo_user', '1385K1', {
    host: 'localhost',
    dialect: 'mysql'
});

const Task = taskInit(sequelize)

module.exports = {
    sequelize,
    Task
}

// todolist
// todo_user
// 1385K1