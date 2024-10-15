
const fs = require("fs")
const os = require("os")

const EventEmmiter = require('events')

class Logger extends EventEmmiter{

  log(message){
    this.emit("Message", {message})
  }
}


const logger = new Logger()
const logFile = './eventlog.text'

const logToFile = (event)=>{
  const logMessage = `${new Date().toISOString} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage)
}

