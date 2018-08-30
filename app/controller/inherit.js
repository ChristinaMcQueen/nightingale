const Controller = require('egg').Controller;

class Inherit extends Controller {
    async protoChain() {
        this.ctx.body = 'hi, egg';
    }
	async borrowingConstruct() {
		this.ctx.body = 'hi, egg';
	}
	async portfolio() {
		this.ctx.body = 'hi, egg';
	}
	async parasiticPortfolio() {
		this.ctx.body = 'hi, egg';
	}
	async proto() {
		this.ctx.body = 'hi, egg';
	}
	async parasitic() {
		this.ctx.body = 'hi, egg';
	}
}

module.exports = Inherit;