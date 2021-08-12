const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Travel";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((resp) => resp.data)
      .catch((err) => console.log(err.message)),
};

module.exports = functions;
