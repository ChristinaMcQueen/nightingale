module.exports = app => {
	const { router, controller } = app;
	router.prefix('/inherit');
	router.get('/prototypeChain', controller.inherit.protoChain);
	router.get('/borrowingConstruct', controller.inherit.borrowingConstruct);
	router.get('/portfolio', controller.inherit.portfolio);
	router.get('/parasiticPortfolio', controller.inherit.parasiticPortfolio);
	router.get('/prototype', controller.inherit.proto);
	router.get('/parasitic', controller.inherit.parasitic);
};