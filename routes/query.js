const { mongoose, db } = require("../queryDb.js")
let models
const routes = [
    {
        handler: async (req, res) => {
            if (models == undefined) models = await db.connect()
            res.send(await db.queryModel(models.minecraftServerSchema.Server,{}))
        },
        url: "/api/getMcServers",
        method: "GET"
    },
    {
        handler: async (req, res) => {
            if (models == undefined) models = await db.connect()
            res.send(await db.queryModel(models.announcementSchema.Announcement,{}))
        },
        url: "/api/getAnnouncements",
        method: "GET"
    },
    {
        handler: async (req, res) => {
            if (models == undefined) models = await db.connect()
            res.send(await db.queryModel(models.staffSchema.Staff,{}))
        },
        url: "/api/getStaff",
        method: "GET"
    }
]

module.exports = routes