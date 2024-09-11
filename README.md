Q1: What are the differences between var, let, and const in JavaScript?

Scope: Var declarations are function-scoped or globally scoped if declared outside the function, which means accessible throughout the function. In contrast, let and const are block-scoped, making only accessible within the block(like if statement or a loop)

Hoisting: 
    • Variables which are declared with var keyword are hoisted to the top of their function or global scope and are initialized with undefined.
    • They can be used before the declaration.
    • Let and const are also hoisted but not initialized, creating a temporal dead zone from the block start to the declaration line.

Reassignment and re-declaration:
    • Variables which are declared with var can be re-declared and updated within its scope.
    • Let  allows updating but not re-declaration in the same scope.
Const  is for constant; it cannot be updated or re-declared once initialized.