// Basic types
let empName: string = "Srilakshmi";
let empAge: number = 22;
let isActive: boolean = true;
console.log("Employee Name:" + empName);
console.log("Employee Age:" + empAge);
console.log("Employee status:" +isActive);


// Array and Tuple
let skills: string[] = ["HTML", "CSS", "TypeScript"];
let employee: [string, number] = ["Rahul", 101];
console.log("Array:" + skills);
console.log("Employee:" +employee);
// Enum
enum Role { Admin, Developer, Tester }
let role: Role = Role.Developer;
console.log("Employee Role:" + role);

// Any and Unknown
let data: any = 50;
data = "Hello";
console.log("Data:" +data);

let value: unknown = "Hi";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// Function with void and never
function show(): void {
  console.log("Welcome to TypeScript");
}
show();
function throwError(): never {
  throw new Error("Something went wrong");
}
