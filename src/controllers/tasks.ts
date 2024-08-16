import { Request, Response } from "express"

const Task = require('../models/Tasks')

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const getTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: 'No task with id' })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: 'No task with id' })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return res.status(404).json({ msg: 'No task with id' })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })

    }

}
