import { Schema, model } from "mongoose";

const reviewsSchema = new Schema({
    rating: Number,
    content: String,
    authorId: String,
    gameId: String
})

const Reviews = model('Reviews',reviewsSchema)
export { Reviews } 