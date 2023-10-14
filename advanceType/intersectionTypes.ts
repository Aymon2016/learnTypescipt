type personalInfor = {
  name: string;
};

type Address = {
  street: string;
  city: string;
};

type ContactInfo = personalInfor & Address;


let urmi:ContactInfo  = {
    name:"urmi",
    street : "1234567890" ,
    city:'chattgonng'
}

type Order = { id: number };
type User = { name: string };

function process(data: Order & User): void;
function process(data: Order): void;
function process(data: User): void;
function process(data: any): void {
  console.log(data);
}

// This allows the process function to accept arguments that are both Order and User.
type Address3 = {
  street: string;
  city: string;
};

type ContactInfo3 = {
  phone: string;
} & Address;

let PersonalInfor3:ContactInfo3 = { 
   phone: 'werfn',
   street:'dxhv',
   city:'chrej'
}

type User4 = {
  name: string;
};

type Admin = User4 & {
  isAdmin: true;
};