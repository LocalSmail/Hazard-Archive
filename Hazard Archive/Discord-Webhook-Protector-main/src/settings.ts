import moment from 'moment';
import config from '../config.json' assert { type: 'json' };

const webhook = config.webhook;
const pass32 = config.pass32;
const ratelimitOnOff = config.ratelimit;
const rateLimitTimeout = config.rateLimitTimeout;
const port = process.env.PORT || config.port;
const time = moment().format('YYYY-MM-DD・HH:mm:ss') + ' |';

export { webhook, pass32, ratelimitOnOff, rateLimitTimeout, port, time };
