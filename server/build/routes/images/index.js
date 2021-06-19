"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import morgan from 'morgan';
var images = express_1.default.Router();
images.use(function (req, res, next) {
    console.log('on route /images');
    next();
});
images.get('/', function (req, res) {
    res.send('GET /api/images/');
});
exports.default = images;
