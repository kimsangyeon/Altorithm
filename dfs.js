class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.isMarked = false;
    }
}

// Depth First Search
const stack = [];
const dfs = (node) => {
    node.isMarked = true;

    stack.push(node);
    while(stack.length > 0) {
        const root = stack.pop();
        const right = root.right;
        const left = root.left;

        if (right && !right.isMarked) {
            right.isMarked = true;
            stack.push(right);
        }
        if (left && !left.isMarked) {
            left.isMarked = true;
            stack.push(left);
        }
    }
};

//깊이 우선 탐색 재귀
const dfs2 = (node) => {
    if (node.isMarked) {
        return;
    } 

    node.isMarked = true;
    const left = node.left;
    const right = node.right;

    left && dfs2(left);
    right && dfs2(right);
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