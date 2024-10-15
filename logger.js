
const fs = require("fs")
const os = require("os")

const EventEmmiter = require('events')
const { memoryUsage } = require("process")

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

logger.on('message', logToFile)

setInterval(()=>{

  const totalMemory = (os.freemem() / os.totalmem()) * 100
  logger.log(`Current memory useage: ${totalMemory.toFixed(2)}`)

}, 3000);

logger.log('Application Started')
logger.log('Application event occcured')