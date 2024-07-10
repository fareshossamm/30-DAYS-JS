/*
            closures
            problem three -- To Be Or Not To Be  --  
*/
var expect = function (val) {
  return {
    toBe: function (value) {
      if (val === value) {
        return "value : true";
      } else {
        return "error: Not Equal";
      }
    },
    notToBe: function (value) {
      if (val !== value) {
        return "value : true";
      } else {
        return "error: Not Equal";
      }
    },
  };
};

console.log(expect(5).toBe(5)); // "value: true"
console.log(expect(5).toBe(null)); // "error: Not Equal"
console.log(expect(5).notToBe(null)); // "value: true"
