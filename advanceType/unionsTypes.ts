

// optional Properties:

type member = {
    name:string;
    age?:number|undefined;
}


type NullableString = string | null | undefined;


function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}


formatValue('string')
formatValue(500)

type active_user_or_inactive_user = "active" | "inactive";



type Shape4 = | { kind: "circle"; radius: number} | { kind: "square"; sideLength: number };

//Polymorphic Functions:

function printValue(value: number | string | boolean) {
  console.log(value);
}

type Configurations = {
  theme: "light" | "dark";
} & {
  analytics: boolean;
};

