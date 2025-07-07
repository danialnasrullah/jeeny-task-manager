const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log('All tasks in database:', tasks.length);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create new task
router.post('/', async (req, res) => {
    try {
        const { title, description, category, deadline, priority } = req.body;
        const task = new Task({
            title,
            description,
            category: category || 'Personal',
            deadline: new Date(deadline),
            priority: priority || 'Medium'
        });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update task
router.put('/:id', async (req, res) => {
    try {
        const { title, description, category, deadline, isCompleted, priority } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                category,
                deadline: deadline ? new Date(deadline) : undefined,
                isCompleted,
                priority
            },
            { new: true, runValidators: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PATCH toggle task completion
router.patch('/:id/toggle', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.isCompleted = !task.isCompleted;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET tasks with approaching deadlines (within 24 hours)
router.get('/deadlines/approaching', async (req, res) => {
    try {
        const now = new Date();
        const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        
        console.log('Checking approaching deadlines:');
        console.log('Now:', now);
        console.log('Tomorrow:', tomorrow);
        
        const approachingTasks = await Task.find({
            deadline: { $gte: now, $lte: tomorrow },
            isCompleted: false
        }).sort({ deadline: 1 });
        
        console.log('Found approaching tasks:', approachingTasks.length);
        console.log('Tasks:', approachingTasks);
        
        res.json(approachingTasks);
    } catch (error) {
        console.error('Error in approaching deadlines:', error);
        res.status(500).json({ message: error.message });
    }
});

// GET overdue tasks
router.get('/deadlines/overdue', async (req, res) => {
    try {
        const now = new Date();
        
        const overdueTasks = await Task.find({
            deadline: { $lt: now },
            isCompleted: false
        }).sort({ deadline: 1 });
        
        res.json(overdueTasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 