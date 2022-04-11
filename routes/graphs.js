const osu = require('node-os-utils');
const routes = [
    {
        handler: async (req, res) => {
            res.send(JSON.stringify({ 
                "version": "1.0.0",
                "name": "Graphs",
                "description": "Fetch Graphs",
                "endpoints": [
                    {
                        "name": "/api/getGraph",
                        "method": "GET",
                        "description": "Api Documentation",
                        "parameters": "None"
                    },
                    {
                        "name": "/api/getGraph/:graphId",
                        "method": "GET",
                        "description": "Fetch a Graph percentage value",
                        "parameters": "graphId"
                    }
                ]
            }))
        },
        url: "/api/getGraph",
        method: "GET"
    },
    {
        handler: async (req, res) => {
            let cpuStatus = await osu.cpu.usage()
            let cpuPercentage = cpuStatus.toFixed(2)
            res.send(JSON.stringify({
                "graphId": "cpu",
                "value": cpuPercentage
            }))
        },
        url: "/api/getGraph/cpu",
        method: "GET"
    },
    {
        handler: async (req, res) => {
            let ramStatus = await osu.mem.info()
            let ramPercentage = (ramStatus.used / ramStatus.total) * 100
            res.send(JSON.stringify({
                "graphId": "ram",
                "value": ramPercentage
            }))
        },
        url: "/api/getGraph/ram",
        method: "GET"
    },
    {
        handler: async (req, res) => {
            let diskStatus = await osu.disk.info()
            let diskPercentage = (diskStatus.used / diskStatus.total) * 100
            res.send(JSON.stringify({
                "graphId": "disk",
                "value": diskPercentage
            }))
        },
        url: "/api/getGraph/disk",
        method: "GET"
    },
    {
        handler: async (req, res) => {
            let networkStatus = await osu.net.info()
            let networkPercentage = (networkStatus.rx_bytes / networkStatus.tx_bytes) * 100
            res.send(JSON.stringify({
                "graphId": "network",
                "value": networkPercentage
            }))
        },
        url: "/api/getGraph/network",
        method: "GET"
        
    }

]

module.exports = routes