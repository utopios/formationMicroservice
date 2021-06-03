"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalIP = void 0;
var getLocalIP = function (os) {
    var addresses = [];
    var interfaces = os.networkInterfaces();
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === "IPv4" && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
    return addresses;
};
exports.getLocalIP = getLocalIP;
