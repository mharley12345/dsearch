const server = require('./server')

const port = 4000



server.listen(port,()=>{
    console.log(`Working On Port:${port}`)
})