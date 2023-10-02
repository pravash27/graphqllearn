"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const mongoose_1 = require("mongoose");
const reviewsSchema = new mongoose_1.Schema({
    rating: Number,
    content: String,
    authorId: String,
    gameId: String
});
const Reviews = (0, mongoose_1.model)('Reviews', reviewsSchema);
exports.Reviews = Reviews;
