import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema'
import db from './_db'
import { resolvers } from './resolvers'
import mongoose from 'mongoose'

const MONGOURL = "mongodb+srv://pravash27:prsgen27@cluster0.xa29r7v.mongodb.net/?retryWrites=true&w=majority"

// server setup
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
const startServer = async () => {
    const client = await mongoose.connect(MONGOURL,{dbName: 'graphql'})
    console.log("Mongo DB Connected")
    const {url} = await startStandaloneServer(server,{
        listen: { port: 4000 }
    })
    console.log("Server Ready at " + url)
}
startServer();




