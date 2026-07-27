const { EventEmitter } = require("node:events");
const sayHi = (name) => {
  console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", ()=>{
    console.log("System started");
    
})
task.on("greet", sayHi);
task.on("greet", (name) => {
  console.log(`${name} starts working`);
});
task.on("greet", (name) => {
  console.log(`${name} stopped working`);
});
task.once("exit", (name) => {
  console.log(`system stopped by ${name}`);
});

task.emit("greet", "Rahul Singh");
console.log();
task.off("greet", sayHi) // must to have function name
task.emit("greet", "Manish Sinha");
console.log();
task.emit("exit", "Manish Sinha");
console.log();
task.emit("exit", "Manish"); // will not work
console.log("total listener", task.listenerCount("greet"));