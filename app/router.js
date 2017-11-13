module.exports = app => {
    app.get('/closure', app.controller.closure.index);
};
