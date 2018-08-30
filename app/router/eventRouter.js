module.exports = app => {
    app.router.get('/event', app.controller.event.index);
};