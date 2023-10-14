// 1.String Literal Types:
type Directions = "up" | "down" | "left" | "right";

// 2.Numeric Literal Types:
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;


// 3.Discriminated Unions:
type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

  // 4. Narrowing with Literal Types:

    function handleDirection(direction: Directions) {
  if (direction === "up") {
    // Here, 'direction' is narrowed to the type 'up'.
    console.log("Moving up");
  } else if (direction === "down") {
    console.log("Moving down");
  }
}


// 5.Keyof and Literal Types:
const person5 = {
  name: "Alice",
  age: 30,
};

type PersonKeys = keyof typeof person5;

// 6. Using Literal Types for Configuration:
type AppConfig = {
  theme: "light" | "dark";
  analytics: boolean;
};

const config: AppConfig = {
  theme: "light",
  analytics: true,
};
