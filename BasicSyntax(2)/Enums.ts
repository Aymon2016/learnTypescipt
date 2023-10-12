
// 1.numeric enums:

enum Direction {
    North,   
    East,    
    South,   
    West   
}

let myDirection: Direction = Direction.East;
console.log(myDirection);

// 2. Accessing Enum Values:

let directionNumeric: Direction = Direction.South;  
let directionString: Direction = Direction["South"];

// 3.Reverse Mapping:
let directionName: string = Direction[2];  // Outputs: "South"

// 2. String Enums:

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let color: Color = Color.Green;

console.log(color);


// 3.Heterogeneous Enums:

    enum Status {
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 0
}

let myStatus: Status = Status.Inactive;
console.log(myStatus);

// Use Enums with functions:

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
}

function logMessage(message: string, level: LogLevel): void {
    
    console.log(`[${LogLevel[level]}] ${message}`);
}

logMessage("An error occurred", LogLevel.ERROR);