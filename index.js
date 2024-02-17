async function main() {
  const { basics } = require("./basics.js");
  basics();
  console.log("");

  const { oop } = require("./oop.js");
  oop();
  console.log("");

  const { apiCall } = require("./apis.js");
  await apiCall();
  console.log("");
}

main()
