//class - Stack;
//constructor: Stack(maxSize);
//Static Method: isStackFull(stackInstance, maxSize); 
//Instance Methods: push(item), pop(), isEmpty(), length(), peek(), clear(),
//Instance Properties: _maxSize , _stack,



// class Stack {
//   constructor(maxSize){
//     this._maxSize = maxSize;
//     this._stack = [];
//   }

//   push(item){
//     if(this._stack.length >= this._maxSize){
//       return 'Error stack is full'
//     }else{
//       this._stack.push(item);
//     }
//   }
//   pop() {
//     if(this._stack.length === 0){
//       return undefined
//     }else{
//       return this._stack.pop();
//     }
//   }

//   isEmpty(){
//     return this._stack.length === 0;
//   }

//   length(){
//     return this._stack.length;
//   }

//   peek(){
//     if(this.isEmpty()){
//       return undefined;
//     }else{
//       return this._stack[this._stack.length - 1]
//     }
//   }
//   clear(){
//     this._stack = [] ;
//   }

//   static isStackFull(stackInstance, maxSize){
//     return stackInstance._stack.length >= maxSize;
    
//   }
// }

// const stack = new Stack(3);
// stack.push(1);
// stack.push(2);   
// stack.push(3); 
// console.log(stack);
// stack.push(4);
// console.log(stack) ;
// stack.pop(); 
// console.log(stack);  
// console.log(stack.peek()) ;
// console.log(stack.length());
// console.log(stack.isEmpty());  //falsse
// stack.clear(); 
// console.log(stack.isEmpty());//true
// console.log(Stack.isStackFull(stack, 3));




//class: Queue;
//Static Methods: merge(queue1, queue2)
//constructor: Queue();
//Instance Methods: enqueue(item), dequeue(), peek(), isEmpty(), size(), clear(), getStack(), 
//Instance Properties: #stack;

// class Queue{
 
//   #stack = [] ;

//   enqueue(item){
//     this.#stack.push(item) ;
//   }

//   dequeue() {
//     if (this.#stack.length !== 0){
//       return this.#stack.shift() ; 
//     }else {
//       return undefined
//     }
//   }

//   peek() {
//     return this.#stack[0];
//   }

//   isEmpty(){
//     return this.#stack.length === 0
//   }


//   size(){
//     return this.#stack.length ;
//   }

//   clear() {
//     this.#stack = [];
//   }

//   getStack(){
//     return  [...this.#stack];  
//   }
  
//   static merge(queue1, queue2){
//     if (!(queue1 instanceof Queue) ||  !(queue2 instanceof Queue)){
//       return null;
//     }
//     const mergedQueue = new Queue();
//     mergedQueue.enqueue(...queue1.getStack(), ...queue2.getStack());  
//     return mergedQueue ;
//   }
// }

// const queue1 = new Queue();
// queue1.enqueue(1);
// queue1.enqueue(2) ;
// const queue2 = new Queue();
// queue2.enqueue(3);
// queue2.enqueue(4) ;
// const mergedQueue = Queue.merge(queue1, queue2);
// console.log(mergedQueue.isEmpty()) ;
// console.log(mergedQueue.peek()); 
// console.log(mergedQueue.dequeue());
// mergedQueue.clear();
// console.log(mergedQueue.isEmpty());