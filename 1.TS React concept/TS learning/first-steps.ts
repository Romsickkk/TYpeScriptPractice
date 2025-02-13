// Creating variable
let userName: string = "Roma";
userName = "Bob";
// username = 1 error

// Creating object
type User = {
  name: string;
  year: number;
  isMerried: boolean;
};

let obj: User = {
  name: "Roma",
  year: 26,
  isMerried: false,
};

// Creating function
function getYear(a: number, b: number): number {
  return a + b;
}

function getYear2(a: number, b: number): void {
  console.log(a + b);
}

type MyTypeFn = (a: number, b: number) => number;

function funcType(a: number, b: number, calcFn: MyTypeFn) {
  calcFn(a, b);
}

funcType(1, 2, getYear);

//========================================================================================

// type AppUser = {
//   name: string;
// };

// type AppAdmin = {
//   premission: string[];
// };

// type AdminUser = AppUser & AppAdmin;

interface AppUser {
  name?: string;
}
interface AppAdmin {
  premission: string[];
}

interface AdminUser extends AppUser, AppAdmin {}

let admin: AdminUser;

admin = {
  premission: ["loged"],
};

//================================================================================================
// Literal
type Role = "admin" | "user" | "edditor";
let role: Role;

// role = 'person' error

role = "admin";
role = "user";
role = "edditor";

function performanceAction(action: string | number, role: Role): void {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

//=======================================================================================
// Generic types

let roles: Array<Role>;

roles = ["admin", "user"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const dataStorage: DataStorage<string> = {
  storage: [],
  add(name) {
    this.storage.push(name);
  },
};

function merege<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merege({ name: "Roma" }, { age: 26 });
