// default parameters

const normalLogger = log => {
	if (typeof log === 'undefined') {
		log = 'default value';
	}
	console.log(log);
};

const logger = (log = 'default value') => {
	console.log(log);
};
logger();

const specialLogger = (log, type = 'log') => console[type](log);
specialLogger('this is message', 'log');
specialLogger('this is warning', 'warn');
specialLogger('this is error', 'error');
