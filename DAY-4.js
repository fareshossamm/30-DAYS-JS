/*
            closures
            problem four -- counter ||  --  
*/
var createCounter = function (init) {
  var current = init;
  // increment function
  var increment = () => ++current;
  // decrement function
  var decrement = () => --current;
  // reset  function
  var reset = () => (current = init);

  return {
    increment,
    decrement,
    reset,
  };
};

var counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.increment()); // 4
