const Controller = require('egg').Controller;

class ClosureController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg';
    }
}

module.exports = ClosureController;