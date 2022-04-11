const fs = require('fs')
const path = require('path')
const axios = require('axios')
const axiosApp = new axios.create()
const port = process.env.PORT || 443
const httpsRedirect = require("fastify-https-redirect")
const fastify = require('fastify')({
    http2: true,
    logger: {
        prettyPrint: true
                ? {
                    translateTime: 'HH:MM:ss Z',
                    ignore: 'pid,hostname'
                }
                : false
    },
    https: {
        allowHTTP1: true,
        key: fs.readFileSync(`${__dirname}/ssl-cert/devious_gg.key`),
        cert: fs.readFileSync(`${__dirname}/ssl-cert/devious_gg.crt`),
    },
})
fastify.register(httpsRedirect);
fastify.register(require('fastify-cors'), {
    origin: `${process.env.CORS_ORIGIN}:${port}/*`
})
fastify.register(require('fastify-static'), {
    root: `${__dirname}//public`,
    prefix: '/', // optional: default '/'

})
fastify.get(
    "/", (req, reply) => {

        return reply.sendFile('./index.html')
    }
)
const start = async () => {
    try {
        await fastify.listen(port, '0.0.0.0')
        console.log("application started on port: " + port)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
routes = fs.readdirSync(`./routes`).filter(file => file.endsWith(".js"))
routes.forEach(route => {
    let routeHandle = require(`./routes/${route}`)
    if(Array.isArray(routeHandle)){
        routeHandle.forEach(e => fastify.route(e))
    }else{
        fastify.route(routeHandle)
    }
})
start()

