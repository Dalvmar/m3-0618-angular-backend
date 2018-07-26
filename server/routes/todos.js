const express = require('express');
const router  = express.Router();
const {TodoList,Todo} = require('../models');

/* GET home page */
router.get('/', (req, res, next) => {
  TodoList.find().populate('todos')
    .then(todoLists => {
      res.status(200).json(todoLists);
    })
    .catch( e => {
      res.status(500).json({
        status:'error',
        error:e.message
      })
    })
});

router.post('/modify',(req,res) => {

  const {todoItemId, status} = req.body;
  Todo.findByIdAndUpdate(todoItemId, {done:status})
    .then(() => {
      res.status(200).json({
        status:"modified",
        newStatusForTodo:status
      })
    })
    .catch( e => {
      res.status(500).json({
        status:'error',
        error:e.message
      })
    })
})

module.exports = router;
