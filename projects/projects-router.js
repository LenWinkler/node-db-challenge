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

module.exports = router;