const TaskModel = require('../models/Tasks')

const getAllTasks = async (req, res) => {
     try {
          const allTasks = await TaskModel.find({})
          res.status(201).json({ tasks: allTasks })
     } catch (error) {
          res.status(500).json(error)
     }
}

const getSingleTask = async (req, res) => {
     try {
          const { id: taskId } = req.params
          const singleTask = await TaskModel.findOne({ _id: taskId })
          if (!singleTask) {
               return res.status(404).json({ msg: `No task with id : ${taskId}` })
          }
          res.status(200).json({ task: singleTask })
     } catch (error) {
          res.status(500).json(error)
     }
}

const createTask = async (req, res) => {
     try {
          const task = await TaskModel.create(req.body)
          res.status(201).json(task)
     } catch (error) {
          res.status(500).json(error)
     }
}

const updateTask = async (req, res) => {
     try {
          const { id: taskId } = req.params

          const updatedTask = await TaskModel.findByIdAndUpdate({ _id: taskId }, req.body, {
               new: true,
               runValidators: true
          })

          if (!updatedTask) {
               return res.status(404).json({ msg: `No task with id : ${taskId}` })
          }

          res.status(200).json({ task: updatedTask })
     } catch (error) {
          res.status(500).json(error)
     }
}

const deleteTask = async (req, res) => {
     try {
          const { id: taskId } = req.params
          const deletedTask = await TaskModel.findByIdAndDelete({ _id: taskId })

          if (!deletedTask) {
               return res.status(404).json({ msg: `No task with id : ${taskId}` })
          }
          res.status(200).json({ task: deletedTask })
     } catch (error) {
          res.status(500).json(error)
     }
}


module.exports = {
     getAllTasks,
     getSingleTask,
     createTask,
     updateTask,
     deleteTask
}