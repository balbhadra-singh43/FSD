const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();


// javascript is synchronous and single-threaded, which means it executes code line by line in the order it is written.

// In asynchronous we use event loop to manage thhe call stack

// Asynchronous calls using timers
// 1 SetTimeout
// 2 Setimmediate
// 3 Process.nextTick
// 4 Set interval

