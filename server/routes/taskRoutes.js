const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// POST create task
router.post("/", async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const saved = await newTask.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: "Invalid data" });
    }
});

// PUT update task
router.put("/:id", async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: "Update failed" });
    }
});

// DELETE task
router.delete("/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: "Delete failed" });
    }
});

module.exports = router;
