const os = require('os');

// Info about the current user
const user = os.userInfo();
console.log(user);

//  Method returns System uptime in seconds
console.log(`System uptime is: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
