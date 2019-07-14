class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.isMarked = false;
    }
}

// Breadth First Search
const queue = [];
/**
 * Node를 큐를 사용하여 너비 우선 탐색을 수행합니다.
 * @param {Node} node 
 */
const bfs = (node) => {
    node.isMarked = true;
    queue.push(node);

    while(queue.length > 0) {
        const root = queue.shift();
        const left = root.left;
        const right = root.right;

        if (left && !left.isMarked) {
            left.isMarked = true;
            queue.push(left);
        }
        if (right && !right.isMarked) {
            right.isMarked = true;
            queue.push(right);
        }
    }
};

const r = new Node(0);
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8);

r.left = n1;
r.right = n2;
n1.left = n3;
n1.right = n4;
n2.left = n5;
n2.right = n6;
n3.left = n7;
n3.right = n8;

bfs(r);