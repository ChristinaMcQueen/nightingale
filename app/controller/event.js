const Controller = require('egg').Controller;

class Event extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }
}

module.exports = Event;