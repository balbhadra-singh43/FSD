import { EventEmitter } from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`Logged in ${name}`);
};

task.on("greet", sayHi);

task.on("greet", () => {
    console.log("Logged out");
});

task.once("greet", () => {
    console.log("System started.....");
});

const shuttingDown = (name) => {
    console.log(`System is shutting down by ${name}`);
};


task.emit("greet", "Ayush");
task.emit("greet", "Piyush");
task.off("greet", shuttingDown("Manager"));
task.emit("greet", "Braj");