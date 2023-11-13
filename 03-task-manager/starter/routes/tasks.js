const express = require('express')
const router = express.Router()

const { getAllTasks, getSingleTask, createTask, updateTask, deleteTask } = require('../controllers/tasks.js')

//getAllTasks
router.route('/').get(getAllTasks)
//getSingleTask
router.route('/:id').get(getSingleTask)
//createTask
router.route('/').post(createTask)
//updateTask
router.route('/:id').patch(updateTask)
//deleteTask
router.route('/:id').delete(deleteTask)

module.exports = router