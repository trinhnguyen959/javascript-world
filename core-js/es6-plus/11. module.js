// module
// import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from './constants.js';
import * as constants from './constants.js';
import logger from './logger.js';
// import with index
import { default as secondLogger } from './logger/index.js';
import { thirdLogger } from './logger/index.js';

logger('this is log message', constants.TYPE_LOG);
logger('this is warning message', constants.TYPE_WARN);
logger('this is error message', constants.TYPE_ERROR);
secondLogger('this is second log message');
thirdLogger('this is the same from one function');
