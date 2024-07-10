/* 
    closures
     problem one -- create hello world function --  
 */
function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
