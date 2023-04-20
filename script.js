//your JS code here. If required.
//your JS code here. If required.
// Create an object called "student" with a "name" property
const student = {
  name: "John"
};

// Add a "getKeys()" method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

console.log(student)