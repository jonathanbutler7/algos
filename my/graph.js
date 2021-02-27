const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// the graph
const adjacencyList = new Map();

// add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}
// add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacencyList);

function bfs(start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift(); //mutates the queue
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      if (destination === 'BKK') {
        console.log(`found ${destination}`);
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    let steps = 0;
    if (destination === 'BKK') {
      console.log(`DFS found ${destination} in ${steps} steps`);
      return;
    }
    if (!visited.has(destination)) {
      steps++;
      dfs(destination, visited);
    }
  }
}

dfs('PHX');
