import {circliful} from 'js-plugin-circliful';
const host = location.origin
const axiosApp = axios.create({
    baseUrl: host
});

graphs = document.querySelectorAll('.circle-graph')


export async function initGraphs(){
    let graphList = []
    for (graph of graphs) {
        graphList.push(
            circliful.newCircle({
                type: 'half',
                id: graph.parentNode.id,
                percent: axiosApp.get(`/api/getGraph/${graph.parentNode.id}`).then(res => res.data.value)
            })
        )
    }
    return graphList
}

export function updateGraph(graph){
    graph.update(
        {type: 'percent', value: axiosApp.get(`/api/getGraph/${graph.id}`).then(res => res.data.value)}
    )
}