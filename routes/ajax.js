const route =
{
    handler: async (req, res) => {
        res.sendFile("./ajax-content/home.html")
    },
    url: "/ajax/home",
    method: "GET"
}

module.exports = route