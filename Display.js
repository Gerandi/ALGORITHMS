// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

class SLL {
  constructor() {
    this.head = null;
  }

  display() {
    let result = "";
    let runner = this.head;
    while (runner) {
      result += runner.val + " ";
      runner = runner.next;
    }
    return result;
  }
}

