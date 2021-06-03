"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ip_service_1 = require("./services/ip.service");
var os_1 = __importDefault(require("os"));
var app = express_1.default();
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log(ip_service_1.getLocalIP(os_1.default));
});
