import { Schema, model } from "mongoose";

const gameSchema = new Schema({
    title: String,
    platform: Array
})
const Game = model('Game',gameSchema)
export { Game }