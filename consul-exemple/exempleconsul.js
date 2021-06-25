const Consul = require('consul')

const  consul = new Consul({
    host:'127.0.0.1',
    port: 8500
})

consul.agent.service.register({
    name: 'notre-api',
    address: '192.168.20.193',
    port: 3000,
    check: {
        http: 'http://192.168.20.193:3000/health',
        interval: '10s',
        timeout: '5s',
    }
}, function(err, result) {
    if (err) {
        console.error(err);
        throw err;
    }

    Console.log ( 'registered successfully! ')
})