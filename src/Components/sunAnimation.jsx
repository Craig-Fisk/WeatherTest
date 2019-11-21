import React, {useRef, useEffect} from "react";
import CanvasRenderer from "./canvasRenderer";
import sunsrc from "../sun.png";

const SunAnimation = () => {
    class Sun {
        constructor(image){
            this.image = new Image();
            this.image.src = image;
            this.x = Math.floor(Math.random() * 400) + 1;
            this.y = Math.floor(Math.random() * 300) + 1;
            this.speed = Math.floor(Math.random() * 4) + 1;
        }
        setRandomPosition(){
            this.x = Math.floor(Math.random() * 400) + 1;
            this.y = 0;
            this.speed = Math.floor(Math.random() * 4) + 1;
        }
        render = (ctx) => {
            ctx.drawImage(this.image, this.x, this.y);
        }
        logic = (canvas) => {
            this.y += this.speed;
            if(this.y > 300) {
                this.setRandomPosition();
            }
        }
    }
    const canvas = useRef(null);

    useEffect(() => {
        const renderQueue = [];
        const logicQueue = [];

        for(let x = 0; x < 20; x++) {
            let sun = new Sun(sunsrc);
            renderQueue.push(sun);
            logicQueue.push(sun);
        }

        const canvasRenderer = new CanvasRenderer(renderQueue, logicQueue, canvas.current);
    }, [canvas]);

    return (
        <canvas width="400" height="300" ref={canvas}></canvas>
    )
}

export default SunAnimation;