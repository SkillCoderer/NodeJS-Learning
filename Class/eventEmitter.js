// Class 4/1/2025

// Event & Event Emitters
const { emit } = require("process");

// Event -> Action
// Event Emitter -> Is the enity responsible for firing the Event

const eventEmitter = require("events").EventEmitter; // Events is the Module

// Class -> It is a blue-print which contains constructor function, class members (parameters and functions)
// Object / Instance -> It is the Phyiscal / Useable form of the Class
// new [keyword] -> Makes a new Object

const eventEmitterInstance = new eventEmitter(); // New keyword is a Constuctor to create Objects

// listening to an event & handling the event.
// on [method] -> Listener Function

const name = "ram";
eventEmitterInstance.on("greet", (name) => {
  console.log(`Good Morning ${name}...!`);
}); // Using the 'on' function, we registered an event and created a listener

// Emitting (release) an event
eventEmitterInstance.emit("greet", name); // To release the particular Event

// Template Engines -> The engine helps us to create Static & Dynamic HTML
