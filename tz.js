const moment = require('moment-timezone');
const yargs = require('yargs');
const FORMAT = 'dddd, MMMM Do YYYY, h:mm:ss a';

moment.tz.setDefault('America/New_York');

const targetTimezone = yargs.argv._[0]; 

if (! targetTimezone ) {
    console.log('Usage: node tz <timezone> [--format]');
    process.exit(1);
  }

const params = yargs.argv;
if (params.format === true){
    formating = FORMAT; 
}
console.log(`The time at the ${'America/New_York'} timezone is ${moment().tz('America/New_York').format(formating)}`);
console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format(formating)}`);
