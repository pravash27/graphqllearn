import { Author } from './models/Author'
import { Game } from "./models/Game"
import { Reviews } from "./models/Reviews"
export const resolvers = {
    Query: {
        async games(){
            return await Game.find({})
        },
        async reviews(){
            return await Reviews.find({})
        },
        async authors(){
            return await Author.find({})
        },
        async review(_: any, args: any){
            return await Reviews.findById(args.id)
        },
        async game(_: any, args: any){
            return await Game.findById(args.id)
        },
        async author(_: any, args: any){
            return await Author.findById(args.id)
        }
    },
    Game: {
        async reviews(parent: any){
            return await Reviews.find({gameId: parent._id})
        }
    },
    Author:{
        async reviews(parent: any){
            return await Reviews.find({authorId: parent._id})
        }
    },
    Reviews:{
        async game(parent: any){
            return await Game.findById(parent.game_id)
        },
        async author(parent: any){
            return await Author.findById(parent.game_id)
        }

    },
    Mutation:{
        async addGame(_: any, args: any){
            const game = new Game({
                title: args.game.title,
                platform: args.game.platform
            })
            await game.save()
            return game
        },
        async deleteGame(_: any, args: any){
            await Game.deleteOne({_id: args.id})
            return await Game.find({})
        },
        async updateGame(_: any, args: any){
            await Game.updateOne({_id : args.id}, args.edits)
            return await Game.findById(args.id)
        },


        async addAuthor(_: any, args: any){
            const author = new Author({
                name: args.author.name,
                verified: args.author.verified
            })
            await author.save()
            return author
        },
        async deleteAuthor(_: any, args: any){
            await Author.deleteOne({_id: args.id})
            return await Author.find({})
        },
        async updateAuthor(_: any, args: any){
            await Author.updateOne({_id : args.id}, args.edits)
            return await Author.findById(args.id)
        }
    }
}