const obj = {
  type: "string",
  text: "hello typescript",
};

function test() {
  if ("type" in obj) {
    console.log(obj.text);
  }
}
export default test;
