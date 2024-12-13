# Event-Driven Logger Example

This project demonstrates a simple, event-driven logging system in Node.js. It uses the built-in `events` and `fs` modules to emit custom log events and write them to a file, showcasing how Node.js handles asynchronous operations via event-driven architecture.

## What It Does

1. **Event Emission:**  
   A custom `Logger` class extends the built-in `EventEmitter`. It provides a `log()` method that, when called, emits a `"message"` event with a message payload.

2. **Event Listening:**  
   A listener (`logToFile`) is attached to the `"message"` event. Every time the logger emits this event, the listener writes the logged message along with a timestamp to `eventlog.txt`.

3. **Regular Status Updates:**  
   A `setInterval` function periodically checks system memory usage and logs the current percentage used. This continually emits `"message"` events, which are then recorded.

4. **Manual Event Logging:**  
   Additional `logger.log()` calls (e.g., `'Application Started'`) also trigger the same event, demonstrating how multiple parts of the code can emit events that are handled by a single listener.

## Demonstration of Event-Driven Architecture

- **Separation of Concerns:**  
  Emitting and handling the message events are decoupled. The `Logger` class just emits events; it doesn’t worry about what happens after emission.

- **Asynchronous Handling:**  
  The event-driven model allows the main execution flow to continue without blocking. While logs are appended to `eventlog.txt` asynchronously, the program can keep performing other operations.

- **Scalability and Extensibility:**  
  Adding new event listeners or changing how messages are processed can be done without altering the `Logger` class. This makes it easy to add or modify behavior as the application grows.

This project is a straightforward illustration of how Node.js’s event-driven architecture simplifies asynchronous operations and separates event producers (emitters) from event consumers (listeners).
