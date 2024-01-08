const jsonServer=require('json-server')

const docServer=jsonServer.create()

const router = jsonServer.router('db.json')

const middilware=jsonServer.defaults()

const port=4000

docServer.use(middilware)
docServer.use(router)


docServer.listen(port,()=>{
    console.log("doc server listening on port" +port);
})
