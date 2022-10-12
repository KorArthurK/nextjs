import React, {useRef, useState, useEffect} from "react";
import canvasImage from "../public/img/imageTest.png";
//import Image from 'next/image'

const CanvasFC = () => {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
   
  
  //const imageTest = canvasImage

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight;

    //contextRef.current = context;

    //context.fillsStyle = "rgba(63,169,245,1)";
    // context.fillStyle = "green";
    // context.fillRect(30,30,100,100);
    const context = canvas.getContext("2d");
    
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    const img = new Image();
    img.src = canvasImage;
    context.drawImage(img,30,30,200,200);//,0,0,200,200);

    contextRef.current = context;
    
    // context.globalAlpha = 0.5;
    context.fillStyle  = "green"
    context.fillRect(70,120,100,30);
    setCtx(context);
    //setCtx(contextRef.current);
    //setCanvasTag(canvas);
  },[]);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;

    if(ctx){
      if(!isDrawing){
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      }else{
        ctx.lineTo(offsetX,offsetY);
        ctx.stroke();
      }      
    }
  };
 
  return (
    <div>
      {}
      <canvas 
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp ={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}  ></canvas>
    </div>
  );
};

export default CanvasFC;
