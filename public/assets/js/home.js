let graphList
async function initHome() {
    graphList = await initGraphs()
    //we then update the graphs with the data from the api
    for (graph of graphList) {
        updateGraph(graph)
    }
    //get servers from api
    const servers = await axiosApp.get(`/api/getServers`)
    //iterate through servers and request the api for the players
    for (server of servers) {
        const players = await axiosApp.get(`/api/getPlayers/${server.port}`)
        //append the name of the server (server.name) to the dom in the id "count-holder" together with the number of players
        let holder = document.createElement("div")
        let textContainer = document.createElement("p")
        textContainer.innerHTML = `${server.name}: ${players.value}`
        holder.appendChild(textContainer)
        document.getElementById("count-holder").appendChild(holder)
    }
}
