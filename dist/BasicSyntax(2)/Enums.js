"use strict";
// 1.numeric enums:
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let myDirection = Direction.East;
console.log(myDirection);
// 2. Accessing Enum Values:
let directionNumeric = Direction.South;
let directionString = Direction["South"];
// 3.Reverse Mapping:
let directionName = Direction[2]; // Outputs: "South"
// 2. String Enums:
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let color = Color.Green;
console.log(color);
// 3.Heterogeneous Enums:
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status["Inactive"] = "INACTIVE";
    Status[Status["Pending"] = 0] = "Pending";
})(Status || (Status = {}));
let myStatus = Status.Inactive;
console.log(myStatus);
// Use Enums with functions:
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function logMessage(message, level) {
    console.log(`[${LogLevel[level]}] ${message}`);
}
logMessage("An error occurred", LogLevel.ERROR);
