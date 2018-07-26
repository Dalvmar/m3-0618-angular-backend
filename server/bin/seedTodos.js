require('dotenv').config();
const mongoose = require('mongoose');
const Todo = require('../models/Todo');
const TodoList = require('../models/TodoList');

mongoose.connect(process.env.DBURL).then( () =>  console.log('connected to DB'));

const todos = [
    {
        text: "Hacer la cama",
        done: false
    },
    {
        text: "Comprar pilas",
        done: false
    },
    {
        text: "Comer verdura",
        done: false
    },
]

Todo.create(todos)
.then(todos => {
    console.log(todos);
    let lista = new TodoList({
        title: "Lista de las tareas de Pepe",
        todos: todos.map(e => e._id)
    })
    return lista.save();
})
.then( () => {
    console.log('Created List');
    mongoose.disconnect();
}).catch(e => console.log(e));