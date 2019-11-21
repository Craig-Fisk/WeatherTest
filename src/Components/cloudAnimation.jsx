import React, {useRef, useEffect} from "react";
import CanvasRenderer from "./canvasRenderer";
import cloud1src from "../cloud1.png";
import cloud2src from "../cloud2.png";

const CloudAnimation = () => {
    class Cloud {
        constructor(image, x, y){
            this.image = new Image();
            this.image.src = image;
            this.x = x;
            this.y = Math.floor(Math.random() * 300) + 1;
            this.speed = Math.floor(Math.random() * 3) + 1;
        }
        render = (ctx) => {
            ctx.drawImage(this.image, this.x, this.y);
        }
        logic = (canvas) => {
            if(this.x > canvas.width) {
                this.x = -this.image.width;
                this.y = Math.floor(Math.random() * 300) + 1;
                this.speed = Math.floor(Math.random() * 3) + 1
            }
            this.x += this.speed;
        }
    }
    const canvas = useRef(null);
    const cloud1 = new Cloud(cloud1src, 0, 0);
    const cloud2 = new Cloud(cloud2src, 100, 100);
    const cloud3 = new Cloud(cloud2src, 20, 50);
    const cloud4 = new Cloud(cloud1src, 300, 200);

    useEffect(() => {
        const renderQueue = [cloud1, cloud2, cloud3, cloud4];
        const logicQueue = [cloud1, cloud2, cloud3, cloud4];

        const canvasRenderer = new CanvasRenderer(renderQueue, logicQueue, canvas.current);
    }, [canvas]);

    return (
        <canvas width="400" height="300" ref={canvas}></canvas>
    )
}

export default CloudAnimation;