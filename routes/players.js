const axios = require('axios')
const axiosApp = axios.create();
const mongoose = require('mongoose')
const { Server } = require('../models/minecraftServerSchema')

const routes =[
    {
        handler: async (req, res) => {
            const servers = await Server.find({port:1, name:1, _id:0})
            res.send(servers)
        },
        url: "/api/getServers",
        method: "GET"
    },
    {
        url: "/api/getPlayers:port",
        method: "GET",
        handler: async (req, res) => {
            try {
                const players = await axiosApp.get(`https://api.bybilly.uk/api/players/${host}/${port}`)
                if (players.value.data.hasOwnProperty("error")) {
                    res.sendStatus(503)
                }
                res.send(players.value.data.online)
            } catch(err){
                console.log(err)
            }
        }

    }
]
module.exports = routes