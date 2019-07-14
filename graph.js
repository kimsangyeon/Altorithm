class Node {
    constructor(data) {
        this.links = [];
        this.data = data;
        this.isVisited = false;
        this.distance = 0;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.maxDistance = 0;
    }

    addRange(n1, n2) {
        if (this.nodes.indexOf(n1) < 0) {
            this.nodes.push(n1);
        }

        if (this.nodes.indexOf(n2) < 0) {
            this.nodes.push(n2);
        }

        n1.links.push(n2);
        n2.links.push(n1);
    }

    // Breadth First Search
    bfs(node) {
        if (this.nodes.indexOf(node) < 0) {
            return;
        }

        const queue = [node];
        node.isVisited = true;

        while(queue.length > 0) {
            const r = queue.shift();

            for (let i = 0; i < r.links.length; i++) {
                if (r.links[i].isVisited === false) {
                    queue.push(r.links[i]);
                    r.links[i].distance = r.distance + 1;
                    r.links[i].isVisited = true;

                    if (this.maxDistance < r.links[i].distance) {
                        this.maxDistance = r.links[i].distance;
                    }
                }
            }
        }
    }

    // Depth First Search
    dfs(node) {
        if (this.nodes.indexOf(node) < 0) {
            return;
        }

        const stack = [node];
        node.isVisited = true;

        while(stack.length > 0) {
            const r = stack.pop();

            for (let i = 0; i < r.links.length; i++) {
                if (r.links[i].isVisited === false) {
                    stack.push(r.links[i]);
                    r.links[i].distance = r.distance + 1;
                    r.links[i].isVisited = true;

                    if (this.maxDistance < r.links[i].distance) {
                        this.maxDistance = r.links[i].distance;
                    }
                }
            }
        }
    }
}