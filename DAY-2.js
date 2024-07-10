/*
            closures
            problem two -- counter  --  
 */

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

var counter = createCounter(10);

console.log(counter()); // The first time counter() is called, it returns n.
console.log(counter()); // Returns 1 more than the previous time.
console.log(counter()); // Returns 1 more than the previous time.
