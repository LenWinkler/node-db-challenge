const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getTasks,
    getResources,
    addProject,
    addTask,
    addResource
}

function getProjects() {
    return db('projects')
};

function getTasks() {
    return db.raw('select tasks.*, projects.name, projects.description as projectDescription from tasks join projects on tasks.project_id = projects.id')
};

function getResources() {
    return db('resources')
};

function addProject(project) {
    return db('projects')
    .insert(project, ['id', 'name', 'description', 'completed'])
    .then(response => {
        console.log(response);
        return response
    })
};

function addTask(task) {
    return db('tasks')
    .insert(task, ['id', 'description', 'notes', 'completed', 'project_id'])
    .then(response => {
        return response
    })
};

function addResource(resource) {
    return db('resources')
    .insert(resource, ['id', 'name', 'description', 'project_id'])
    .then(response => {
        return response
    })
};