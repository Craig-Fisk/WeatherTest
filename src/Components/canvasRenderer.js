export default class CanvasRenderer {
    constructor(renderQueue, logicQueue, canvas) {
        this.renderQueue = renderQueue;
        this.logicQueue = logicQueue;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        setInterval(this.logic.bind(this), 33);
        this.render();
    }

    logic() {
        this.logicQueue.forEach(element => {
            element.logic(this.canvas);
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderQueue.forEach(element => {
            element.render(this.ctx);
        });
        window.requestAnimationFrame(this.render.bind(this));
    }
}