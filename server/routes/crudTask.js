const router = require('express').Router();
const { Task } = require('../db/model');

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

router.post('/task', async (req, res) => {
  const { text } = req.body;
  try {
    const task = await Task.create({ text });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

router.delete('/task', async (req, res) => {
  const { id } = req.body;
  try {
    await Task.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});
router.patch('/task/status', async (req, res) => {
  const { id } = req.body;
  try {
    const task = await Task.findById(id);
    await Task.findByIdAndUpdate(
      { _id: id },
      { $set: { status: !task.status } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});
router.patch('/task/edit-status', async (req, res) => {
  const { id } = req.body;
  try {
    const task = await Task.findById(id);
    await Task.findByIdAndUpdate(
      { _id: id },
      { $set: { editStatus: !task.editStatus } },
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

router.patch('/task/edit', async (req, res) => {
  const { id, newText } = req.body;
  try {
    const task = await Task.findByIdAndUpdate({ _id: id }, { $set: { text: newText } });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

module.exports = router;
