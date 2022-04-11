const route =
{
    handler: async (req, res) => {
        res.sendFile("./backend.html")
    },
    url: "/backend",
    method: "GET"
}

module.exports = route