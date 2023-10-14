

// 1.String Enums:

enum Color2 {
    Red = 'red',
    Green = 'green',
    blue = 'blue'
}



// Reverse Mapping

const RedColorName:string = Color2.Red  // 'red'
const BlueColorName:string = Color2['blue'] // 'blue'

enum Configuration {
  Version = 1,
  Status = "OK",
}
// Computed Properties and Methods in Enums:

enum userStatus {
  Active = "active",
  Inactive = "inactive",
}

enum userActive {
  Alice = userStatus.Active,
  Bob = userStatus.Inactive,

}

enum HTTPMethods {
  GET,
  POST,
  PUT,
  DELETE,
}

type HTTPRequest = {
  method: keyof typeof HTTPMethods;
  url: string;
};

const request: HTTPRequest = {
  method: "GET",
  url: "/api/data",
};