export const getLocalIP = (os:any) => {
    const addresses = []

    const interfaces = os.networkInterfaces()

    for(let k in interfaces) {
        for(let k2 in interfaces[k]) {
            const address = interfaces[k][k2]
            if(address.family === "IPv4" && !address.internal) {
                addresses.push(address.address)
            }
        }
    }

    return addresses
}