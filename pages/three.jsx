import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

const Three = () => {

    const svgRef = useRef(null);
   
    useEffect(() => {

        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({canvas});
      
        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;
      
        const scene = new THREE.Scene();
      
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      
        const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
      
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
      
        function render(time) {
          time *= 0.001;  // convert time to seconds
      
          cube.rotation.x = time;
          cube.rotation.y = time;
      
          renderer.render(scene, camera);
      
          requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

}, []); 

return (
    <div>
    <canvas id="c"></canvas>
{/* <div ref={tooltipRef} className="lc-tooltip">
  <div className="data"></div>
  <div className="date"></div>
</div> */}
    </div>
);
};


const Test = () =>{    
return (
  <>
    {/* <LineChart Data={data} data_type="campaign_conversions" /> */}
    <Three/>
  </>
);
};

export default Test;