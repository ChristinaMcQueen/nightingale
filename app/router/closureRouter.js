module.exports = app => {
    app.router.get('/closure', app.controller.closure.index);
};
