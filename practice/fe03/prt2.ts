let score: number | string = 33;
score = 44;
score = "55";

type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let hitesh: User | Admin = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };

// Functions and Type Narrowing
function getDbId(id: number | string) {
    // Check type to perform specific operations (Narrowing)
    if (typeof id === "string") {
        id.toLowerCase();
    }
    
    if (typeof id === "number") {
        id + 2;
    }
}

getDbId(3);
getDbId("3");

// Arrays with Union Types
// Use parentheses to allow a mix of types within the same array
const data: (string | number | boolean)[] = [1, 2, "3", true];

// Literal Types
// Restricts the variable to specific allowed values
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"; // Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'