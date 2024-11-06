const Express = require('express')
const app = Express()
const env = require('dotenv').config()
const SetUpDb = require('./App/Database/Db')
const Port = process.env.Port
const {ApolloServer} = require('apollo-server-express')
const typeDefs  = require('./App/AppoloServer/TypeDef/Typedef')
const resolvers = require('./App/AppoloServer/Resolvers/Resolvers')


const StartApolloserver = async () =>{
    const Server =  new ApolloServer({
        typeDefs,
        resolvers,
        introspection:false
    })


   await Server.start()
   Server.applyMiddleware({app})
}


   StartApolloserver()
   SetUpDb()

   app.get('/graphql',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>404 Error Page</title>
        </head>
        <body>
            <h2>This is the Error Page</h2>
            <p>opps Sorry This Page Doest Not Exist</p>
            </body>
    </html>`);
   })




   app.listen(Port,()=>{
    console.log(`Connected to the Port ${Port}`)
    console.log(`http://localhost:${process.env.PORT}/graphql`)
   })

