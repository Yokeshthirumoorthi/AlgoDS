class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  enqueue(data) {
    if (data == null) return;
    if (this.head == null) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  print() {
    let result = [];
    let current = this.head;
    if (this.head) {
      result.push(this.head.data);
    }
    while (current.next) {
      current = current.next;
      result.push(current.data);
    }
    console.log(result);
  }
}

let list = new LinkedList();
list.enqueue(5);
list.enqueue(3);
list.enqueue(4);
list.enqueue(2);
list.print();
