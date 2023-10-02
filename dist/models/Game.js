"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    title: String,
    platform: Array
});
const Game = (0, mongoose_1.model)('Game', gameSchema);
exports.Game = Game;
