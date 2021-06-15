class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head // references the first node in a linked list
    }

    traverseAndLog() {
        // print out every value of our linked list
        let current = this.head
        while(current !== null) {
            console.log(current.value)
            current = current.next
        }
        console.log("list is over")
    }

    addToBeginning(node) {
        node.next = this.head
        this.head = node
    }
}

const node1 = new Node("node 1")
const node2 = new Node("node 2")
const node3 = new Node("node 3")
const node4 = new Node("node 4")
const node5 = new Node("node 5")
const node6 = new Node("node 6")
const node7 = new Node("node 7")
const node8 = new Node("node 8")
const node9 = new Node("node 9")

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = node9

const node0 = new Node("node 0")

const linkedList = new LinkedList(node1)