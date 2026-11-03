'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  push(element) {
    // Add an element to the top.
    this.items.push(element);
  }

  pop() {
    // Remove and return the top element.
    return this.items.pop();
  }

  peek() {
    // Return the top element without removing it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Return true when the stack is empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements.
    return this.items.length;
  }

  toString() {
    // Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the top action.
console.log('Top Action: ' + actionHistory.peek());

// Undo the most recent action.
console.log('Undo Action: ' + actionHistory.pop());

// Display remaining actions and size.
console.log('Remaining Actions: ' + actionHistory.toString());
console.log('Stack Size: ' + actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  enqueue(element) {
    // Add an element to the back.
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element.
    return this.items.shift();
  }

  front() {
    // Return the front element without removing it.
    return this.items[0];
  }

  isEmpty() {
    // Return true when the queue is empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements.
    return this.items.length;
  }

  toString() {
    // Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the required requests.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the front request.
console.log('Next Request: ' + waitingRequests.front());

// Process two requests.
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Processed: ' + waitingRequests.dequeue());

// Display remaining requests and size.
console.log('Remaining Requests: ' + waitingRequests.toString());
console.log('Queue Size: ' + waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  enqueue(request, priority) {
    // Create an item containing the request and priority.
    const item = {
      request: request,
      priority: priority
    };

    // Find the correct position while preserving
    // arrival order for equal priorities.
    let position = 0;

    while (
      position < this.items.length &&
      this.items[position].priority <= priority
    ) {
      position++;
    }

    // Insert the item at the correct position.
    this.items.splice(position, 0, item);
  }

  dequeue() {
    // Remove and return the first item.
    return this.items.shift();
  }

  size() {
    // Return the number of items.
    return this.items.length;
  }

  print() {
    // Display every request and priority.
    for (let i = 0; i < this.items.length; i++) {
      console.log(
        this.items[i].request + ', Priority ' + this.items[i].priority
      );
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Display the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request.
const processedPriorityRequest = urgentRequests.dequeue();

console.log(
  'Processed Priority Request: ' +
  processedPriorityRequest.request +
  ', Priority ' +
  processedPriorityRequest.priority
);

// Display the remaining requests.
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================