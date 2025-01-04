# Unexpected String Concatenation in JavaScript

This example demonstrates a common JavaScript pitfall: the unexpected concatenation of numbers and strings using the '+' operator.  JavaScript's dynamic typing allows for implicit type coercion, which can lead to errors that are difficult to debug.

The `bug.js` file contains the code exhibiting the problem.  The `bugSolution.js` file provides a solution using explicit type checking or conversion.