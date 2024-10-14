
const fs = require("fs")
const os = require("os")

const EventEmmiter = require('events')

class Logger extends EventEmmiter{

  log(message){
    this.emit("message", {message})
  }
}


const logger = new Logger()
const logFile = './eventlog.txt'

const logToFile = (event)=>{
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;

  fs.appendFile(logFile, logMessage, (error)=>{
    if(error){
      console.log('Failed to write to file :', error)
    }
  })
}

logger.on('message', logToFile)

setInterval(()=>{

  const totalMemory = (os.freemem() / os.totalmem()) * 100
  logger.log(`Current memory useage: ${totalMemory.toFixed(2)}%`)

}, 3000);

logger.log('Application Started')
logger.log('Application event occcured')