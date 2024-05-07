// import json-server
const jsonServer= require('json-server')
// create server for media player app
const MPserver = jsonServer.create()
// const middleware used by JSON server
const middleware = jsonServer.defaults()
// set up route for json file in server
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = process.env.PORT || 3000
// use middlewares
MPserver.use(middleware)
// use router
MPserver.use(route)
MPserver.listen(PORT,()=>{
    console.log(`Media Player Server started at port ${PORT} and waiting for client request`);
})


