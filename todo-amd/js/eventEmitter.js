define(() => {
  class EventEmitter {
    constructor() {
      if (EventEmitter.instance) {
        return EventEmitter.instance;
      }
      this.events = {};
      EventEmitter.instance = this;
    }

    on(eventName, listener) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
      const listeners = this.events[eventName];
      if (listeners) {
        listeners.forEach((listener) => {
          listener(...args);
        });
      }
    }
  }

  return EventEmitter;
});
