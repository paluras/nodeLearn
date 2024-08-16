"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { people } = require('./db');
const app = (0, express_1.default)();
const middleware = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};
// app.use('/api', [middleware, authorize])
app.get('/api/people', (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    });
});
app.listen(5001, () => {
    console.log('Server is running at port 5001');
});
//# sourceMappingURL=app.js.map