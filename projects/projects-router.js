const Projects = require('./projects-model.js');

const router = require('express').Router();

router.get('/projects', (req, res) => {
    Projects.getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log('get projects error', err);
        res.status(500).json({ error: "Unable to get projects" })
    })
});

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log('get resources error', err);
        res.status(500).json({ error: "Unable to get resources" })
    })
});

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log('get tasks error', err);
        res.status(500).json({ error: "Unable to get tasks" })
    })
});

router.post('/projects', (req, res) => {
    Projects.addProject(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        console.log('add project error', err);
        res.status(500).json({ error: "Unable to add project" })
    })
});

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        console.log('add resource error', err);
        res.status(500).json({ error: "Unable to add resource" })
    })
});

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        console.log('add task error');
        res.status(500).json({ error: "Unable to add task" })
    })
})

module.exports = router;