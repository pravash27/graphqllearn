"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Author_1 = require("./models/Author");
const Game_1 = require("./models/Game");
const Reviews_1 = require("./models/Reviews");
exports.resolvers = {
    Query: {
        games() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Game_1.Game.find({});
            });
        },
        reviews() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Reviews_1.Reviews.find({});
            });
        },
        authors() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Author_1.Author.find({});
            });
        },
        review(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Reviews_1.Reviews.findById(args.id);
            });
        },
        game(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Game_1.Game.findById(args.id);
            });
        },
        author(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Author_1.Author.findById(args.id);
            });
        }
    },
    Game: {
        reviews(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Reviews_1.Reviews.find({ gameId: parent._id });
            });
        }
    },
    Author: {
        reviews(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Reviews_1.Reviews.find({ authorId: parent._id });
            });
        }
    },
    Reviews: {
        game(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Game_1.Game.findById(parent.game_id);
            });
        },
        author(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Author_1.Author.findById(parent.game_id);
            });
        }
    },
    Mutation: {
        addGame(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const game = new Game_1.Game({
                    title: args.game.title,
                    platform: args.game.platform
                });
                yield game.save();
                return game;
            });
        },
        deleteGame(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Game_1.Game.deleteOne({ _id: args.id });
                return yield Game_1.Game.find({});
            });
        },
        updateGame(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Game_1.Game.updateOne({ _id: args.id }, args.edits);
                return yield Game_1.Game.findById(args.id);
            });
        }
    }
};
