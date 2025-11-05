// Function Parameter and Return Types Example
//  1. Function with parameter and return type
function add(a: number, b: number): number {
  return a + b;
}
//  2. Function with no return type (void)
function message(name: string): void {
  console.log("Log:", name);
}
//  3. Function with optional parameter (using ?)
function greet(name: string, message?: string): void {
  if (message) {
    console.log(`Hello ${name}, ${message}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
// 4. Default Parameters
function displayInfo(name: string, age: number = 18): void {
  console.log(`Name: ${name}, Age: ${age}`);
}
// Function calls
console.log(add(2,3));
message("Typescript");
greet("Alice");                  
greet("Bob", "Welcome back!");  
displayInfo("Alice");        // Name: Alice, Age: 18
displayInfo("Bob", 25);      // Name: Bob, Age: 25
