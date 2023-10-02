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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const mongoose_1 = __importDefault(require("mongoose"));
const MONGOURL = "mongodb+srv://pravash27:prsgen27@cluster0.xa29r7v.mongodb.net/?retryWrites=true&w=majority";
// server setup
const server = new server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield mongoose_1.default.connect(MONGOURL, { dbName: 'graphql' });
    console.log("Mongo DB Connected");
    const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 }
    });
    console.log("Server Ready at " + url);
});
startServer();
