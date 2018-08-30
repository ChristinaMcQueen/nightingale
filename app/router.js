require('@babel/core/register');
require('@babel/polyfill');
import closureRouter from './router/closureRouter';
import eventRouter from './router/eventRouter';
import inheritRouter from './router/inheritRouter';

module.exports = app => {
    closureRouter(app);
	eventRouter(app);
	inheritRouter(app);
};
