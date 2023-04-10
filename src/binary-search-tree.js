const {Node} = require('../extensions/list-tree.js');


class BinarySearchTree {

    constructor() {
        this.tree = null;
    }

    root() {
        return this.tree;
    }

    add(data) {
        this.tree = addWithin(this.tree, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        return finData(this.tree, data, 'has');
    }

    find(data) {
        return finData(this.tree, data, 'find');
    }

    remove(data) {
        this.tree = removeNode(this.tree, data);
    }

    min() {
        if (!this.tree) {
            return;
        }

        return findValue(this.tree, 'left');
    }

    max() {
        if (!this.tree) {
            return;
        }

        return findValue(this.tree, 'right');
    }
}

function finData(node, data, method) {
    if (!node) {
        if (method === 'find') {
            return null;
        }

        if (method === 'has') {
            return false;
        }
    }

    if (node.data === data) {
        if (method === 'find') {
            return node;
        }

        if (method === 'has') {
            return true;
        }
    }

    if (node.data > data) {
        return finData(node.left, data, method)
    }

    if (node.data < data) {
        return finData(node.right, data, method);
    }
}

function removeNode(node, data) {
    let maxValueLeft;

    if (!node) {
        return null;
    }

    if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
    } else if (node.data === data) {

        if (!node.left && !node.right) {
            return null;
        }

        if (!node.left) {
            return node.right;
        }

        if (!node.right) {
            return node.left;
        }

        maxValueLeft = node.left;

        while (maxValueLeft.right) {
            maxValueLeft = maxValueLeft.right;
        }
        node.data = maxValueLeft.data;

        node.left = removeNode(node.left, maxValueLeft.data);

        return node;
    }
}

function findValue(node, dir) {
    let findValue = node;

    while (findValue[dir]) {
        findValue = findValue[dir];
    }

    return findValue.data;
}

module.exports = {
    BinarySearchTree
};




