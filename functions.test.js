const functions = require("./functions");

// // Run function before each of test
// beforeEach(() => initDatabase());
// // Run function after each of test
// afterEach(() => closeDatabase());

// // Run function before all tests
// beforeAll(() => initDatabase());
// //Run function after all tests
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

// // Run beforeEach() or afterEach() within a specific test
// const nameCheck = () => {
//   console.log("Checking Name...");
// };

// describe("Checking Names", () => {
//   beforeEach(() => nameCheck());

//   test("User is Jeff", () => {
//     const user = "Jeff";
//     expect(user).toBe("Jeff");
//   });

//   test("User is Jeff", () => {
//     const user = "Karen";
//     expect(user).toBe("Karen");
//   });
// });

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeUndefined
test("Should be undefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});

// toBeFalsy
test("Should be Falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBeTruthy
test("Should be Truthy", () => {
  expect(functions.checkValue(1)).toBeTruthy();
});

// toEqual - to check Array/Object
test("User should be Brad Travel object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Travel",
  });
});

// Less than
test("Should be less than 100", () => {
  const load1 = 20;
  const load2 = 70;
  expect(load1 + load2).toBeLessThan(100);
});

// Less than or Equal to
test("Should be less than or equal to 100", () => {
  const load1 = 20;
  const load2 = 80;
  expect(load1 + load2).toBeLessThanOrEqual(100);
});

// Greater than
test("Should be greater than 100", () => {
  const load1 = 20;
  const load2 = 90;
  expect(load1 + load2).toBeGreaterThan(100);
});

// Greater than or Equal to
test("Should be greater than or equal to 100", () => {
  const load1 = 20;
  const load2 = 80;
  expect(load1 + load2).toBeGreaterThanOrEqual(100);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays toContain() element
test("Admin should be in usernames", () => {
  const usernames = ["John", "Karen", "Admin"];
  expect(usernames).toContain("Admin");
});

// Working with async data
// Promise
test("User fetched name should be Leanne Graham as Promise", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
// Async Await
test("User fetched name should be Leanne Graham as Async Await", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
