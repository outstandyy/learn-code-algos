class LinkedList {
  constructor() {
    this.head = null;

    // insertNodeAtHead method will insert a LinkedListNode at head
    // of a linked list.
    this.insertNodeAtHead = function (node) {
      if (this.head != null) {
        node.next = this.head;
        this.head = node;
      } else this.head = node;
    };

    // createLinkedList method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let newNode = new LinkedListNode(element);
        this.insertNodeAtHead(newNode);
      });
    };

    // This method will display the elements of the linked list.
    this.display = function () {
      let result = '',
        temp = this.head;
      while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) {
          result += ', ';
        }
      }
      result += '';
      return result;
    };
  }
}

class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function removeNthLastNode(head: LinkedListNode | null, n: number): void {
  let right = head,
      left = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  if (!right) {
    return head.next;
  }

  while (right.next != null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;
}
