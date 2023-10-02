import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: String,
    verified: Boolean
})
const Author = model('Author',authorSchema) 
export { Author }