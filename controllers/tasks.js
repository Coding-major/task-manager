const Task = require('../models/tasks')


const getAllTasks = async (req, res) => {
    // res.send("get all items")
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getOneTask = async (req, res) => {
    try {
        const {id: get} = req.params
        const search = await Task.findOne( {_id: get} )
        if (!search) {
            return res.status(404).json({msg: 'no task with that id'})
        }
        res.status(201).json({search})
    } catch (err){
        res.status(500).json({msg: err})
    }    // try {
    //     const task = await Task.findOne({id: req.params.id})
    // }

}

const updateTask = async (req, res) => {
    try {
        const {id: paramsID} = req.params
        const change = await Task.updateOne({_id:paramsID}, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({change})
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteTask = async (req, res) => {
    try {
        const paramsID = req.params.id
        const remove = await Task.deleteOne({_id: paramsID})
        res.status(201).json({msg: "successfully deleted"})
    } catch (err) {
        res.status(500).json({msg: err})
    }
    // res.send("delete a task")
}

module.exports = {
    getAllTasks,
    createTask,
    getOneTask,
    updateTask,
    deleteTask
}