"use strict";
// 1.String Enums:
var Color2;
(function (Color2) {
    Color2["Red"] = "red";
    Color2["Green"] = "green";
    Color2["blue"] = "blue";
})(Color2 || (Color2 = {}));
// Reverse Mapping
const RedColorName = Color2.Red; // 'red'
const BlueColorName = Color2['blue']; // 'blue'
var Configuration;
(function (Configuration) {
    Configuration[Configuration["Version"] = 1] = "Version";
    Configuration["Status"] = "OK";
})(Configuration || (Configuration = {}));
// Computed Properties and Methods in Enums:
var userStatus;
(function (userStatus) {
    userStatus["Active"] = "active";
    userStatus["Inactive"] = "inactive";
})(userStatus || (userStatus = {}));
var userActive;
(function (userActive) {
    userActive["Alice"] = "active";
    userActive["Bob"] = "inactive";
})(userActive || (userActive = {}));
var HTTPMethods;
(function (HTTPMethods) {
    HTTPMethods[HTTPMethods["GET"] = 0] = "GET";
    HTTPMethods[HTTPMethods["POST"] = 1] = "POST";
    HTTPMethods[HTTPMethods["PUT"] = 2] = "PUT";
    HTTPMethods[HTTPMethods["DELETE"] = 3] = "DELETE";
})(HTTPMethods || (HTTPMethods = {}));
const request = {
    method: "GET",
    url: "/api/data",
};
