// 1. Variables
var firstName = "Amrutha";
let age = 21;
const language = "JavaScript";

console.log("Name:", firstName);
console.log("Age:", age);
console.log("Language:", language);

// 2. Data Types
let isStudent = true;
let marks = 85;
let result = null;
let value;

console.log(typeof firstName); // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean
console.log(result);           // null
console.log(value);            // undefined

// 3. Operators
let a = 10;
let b = 5;

console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
console.log("Mod:", a % b);

// 4. Comparison Operators
console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b);

// 5. Conditional Statements
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// 6. Switch Statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// 7. Loops

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

// while loop
let i = 1;
while (i <= 3) {
  console.log("While loop:", i);
  i++;
}

// do-while loop
let j = 1;
do {
  console.log("Do-While loop:", j);
  j++;
} while (j <= 2);

// 8. Functions
function greet(name) {
  return "Hello " + name;
}

console.log(greet(firstName));

// Arrow Function
const add = (x, y) => x + y;
console.log("Arrow Function Add:", add(3, 4));

// 9. Arrays
let subjects = ["HTML", "CSS", "JavaScript"];

console.log(subjects);
console.log(subjects[0]);

subjects.push("React");
console.log(subjects);

subjects.pop();
console.log(subjects);

// Loop through array
for (let sub of subjects) {
  console.log("Subject:", sub);
}

// 10. Objects
let student = {
  name: "Amrutha",
  age: 21,
  course: "JavaScript",
  isActive: true
};

console.log(student);
console.log(student.name);
console.log(student.course);

// Update object
student.age = 22;
console.log(student);

// 11. Nested Object
let college = {
  name: "AIT College",
  student: {
    name: "Amrutha",
    dept: "ISE"
  }
};

console.log(college.student.name);

// 12. Array of Objects
let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

for (let user of users) {
  console.log(user.id, user.name);
}

// 13. String Methods
let msg = "JavaScript Basics";

console.log(msg.length);
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.includes("Java"));

// 14. Math Object
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.random());

// 15. Simple Program
function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEven(10));
console.log(isEven(7));

