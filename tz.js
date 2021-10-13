/* eslint-disable no-unused-vars */
const moment = require ('moment-timezone');

moment.tz.setDefault('America/New_York');

const targetTimezone = "Europe/Paris";

moment()