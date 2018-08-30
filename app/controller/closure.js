const Controller = require('egg').Controller;

class ClosureController extends Controller {
    async index(ctx) {
        function makeAdder(x) {
            return function(y) {
                return x + y;
            };
        }
        const add5 = makeAdder(5);
        const add10 = makeAdder(10);
        const data = { title: 'closure', add5: add5(2), add10: add10(2) };
        this.ctx.body = await ctx.renderView('closure.ejs', data);
    }
}

module.exports = ClosureController;