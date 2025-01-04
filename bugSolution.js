function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Error: Operands must be numbers");
    return NaN; // or throw an error
  }
}

function bar() {
  console.log(foo(2, 2)); // Output: 4
  console.log(foo(2, "2")); // Output: Error: Operands must be numbers
}

bar();