// Arrow Functions Example in TypeScript
//1. Simple Arrow Function with Return Type
const add = (a: number, b: number): number =>
{
return a + b;
}
console.log("Addition:", add(10, 20));
// 2. Arrow Function with Optional Parameter (using ?)
const greet = (name?: string): string => {
  return name ? `Hello, ${name}!` : "Hello, Guest!";
};
console.log(greet("Srilakshmi"));
console.log(greet()); // Optional parameter not passed
//3. Arrow Function with Default Parameter
const multiply = (a: number, b: number = 2): number => 
{
return a * b;
}
console.log("Multiply (default b=2):", multiply(5));
console.log("Multiply (custom b=4):", multiply(5, 4));
//4. Arrow Function with Rest Parameters
const showHobbies = (name: string, ...hobbies: string[]): string => 
{
  return `${name}'s hobbies are: ${hobbies.join(", ")}`;
};
console.log(showHobbies("Srilakshmi", "Reading", "Coding", "Traveling"));
