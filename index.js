const server = require('./server.js');

const PORT = process.env.PORT || 8023;

server.listen(PORT, () => {
    console.log(`\nRunning on port ${PORT}\n`)
})

