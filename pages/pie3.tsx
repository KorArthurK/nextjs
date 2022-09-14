import * as React from "react";
import * as d3 from "d3";

import css from "styled-jsx/css";
import { select } from "d3-selection";
import { interpolate } from "d3-interpolate";
import { arc, pie } from "d3-shape";
import { interval } from "d3";

// <style jsx>{`
// #tooltip {
//   position: absolute;
//   width: 200px;
//   height: auto;
//   padding: 10px;
//   background-color: white;
//   -webkit-border-radius: 10px;
//   -moz-border-radius: 10px;
//   border-radius: 10px;
//   -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
//   -mox-box-shadow: 4px 4px 4px 10px rgba(0, 0, 0, 0.4);
//   box-shadow: 4px 4px 10px rbga(0, 0, 0, 0.4) pointer-events: none;
// }
// #tooltip.hidden {
//   opacity: 0;
// }
// #tooltip p {
//   margin: 0;
//   font-family: sans-serif;
//   font-size: 16px;
//   line-height: 20px;
// }
// `}</style>

interface SvgDimensions{
  width: number;
  height: number;
}

//function PieChart(_svgDimensions:SvgDimensions ){
interface iData{
  Data: number[];
}
const PieChart:React.FC<iData> = ({Data}) => {

  const svgRef = React.useRef(null);  
  React.useEffect(() => {

  const svgDimensions = {
    width: 500,
    height: 500,
  };
  
  //const svgDimensions = _svgDimensions;
  //console.log(svgDimensions.height + svgDimensions.width);
  const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2;
  const data = Data;  
  
const svg = d3
    .select(svgRef.current)    
    .attr("width", svgDimensions.width)
    .attr("height", svgDimensions.height)
    .style("border", "1px solid rgba(0,0,0,0.2)");

  const g = svg
    // .select("svg")
    .append("g")
    .attr("class", "g1")    
    .attr("transform",`translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`
    );
    
//   const color = d3.scaleOrdinal([
//     "#ff9800",
//     "#ffa726",
//     "#ffb74d",
//     "#ffcc80",
//     "#ffe0b2",
//     "#fff3e0",
//   ]);
    const color = d3.scaleOrdinal([
        "#404040",
        "#50bcdf",
        "#462c95",        
        "#000066",
        "#000080",
        "#000000",
    ]);

  const pie = d3.pie();
  const arc:any = d3.arc().innerRadius(0).outerRadius(radius);
  

  const arcs = g
    .selectAll("arc")
    .data(pie(data))    
    .enter()
    .append("g")
    .attr("class", "arc")
    .on("mouseover", onMouseOver) 
    .on("mouseout", onMouseOut); 

    arcs
      .append("path")
      .attr("fill", (d, i:any) => color(i))  
      .transition()
      .duration(500)
      .attr("d", arc)
      // .attrTween("d", (d) => {
      //   //let current = d.startAngle;
        
      //   var i = d3.interpolate( d.startAngle, d.endAngle);
      //   //current = 0;
      //   //console.log(current);
      //   return function(t) {
      //     //d.startAngle = i(t);          
      //     return arc(i(t));
      //   }  
      // })
 
      .attrTween("d", (finish) => {
        var start = {
            startAngle: 0,
            endAngle: 0
        };
        var interpolator = d3.interpolate(start, finish);
        return function(d) { 
          return arc(interpolator(d)); 
        };
      });

    //   .transition().duration(500).attrTween("d",  (a) => { 
    //   let start = a.startAngle;
    //   let i  = d3.interpolate(start, a);
    //   //let i = d3.interpolate(0, 10)
    //   start = parseInt(String(i(0)));
    //   return function(t) {
    //     //text.text( format(i2(t) / 100) );
    //     return arc(i(t));
    //   };
    // }); // redraw the arcs
      
      // .attrTween("d", (d) => {
      //   var i = d3.interpolate(d.endAngle, d.startAngle);

      //   return function(t) {
      //     d.startAngle = i(1);
      //     return arc(d);
      //   }  
      // });
          
        //   var i = d3.interpolate(d.endAngle, d.startAngle);
        //   d.startAngle = 0;
        //   return arc(d);
        //   // return function (t) {
        //   //     d.startAngle = i(t);
        //   //     return arc(d);
        //   // }
        // });  
      // .transition()
      // .duration(1000)
      // .delay(function(d, i) {
      //   return i * 1000
      // });

      // .attrTween("d", (d) => {          
      //   var i = d3.interpolate(d.endAngle, d.startAngle);
      //   //console.log(i)
      //   return function (t) {
      //       d.startAngle = i(t);
      //       console.log(t)
      //       return arc(d);
      //   }
      // });  

    arcs
        .append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .text((d) => d.value)
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .attr("font-weight", "bold")
        .attr("fill", "#fff")
        .attr("text-anchor", "middle")
        .attr("display", "none");

    function onMouseOut(this: any, d:any, i:any) {
        d3.select(this)
            .select("path")
            .transition()
            .duration(200)
            .style("fill", color(i));
        d3.select(this).select("text").attr("display", "none");
    }
    
    function onMouseOver(this: any, d:any, i:any) {
        d3.select(this)
            .select("path")
            .transition()
            .duration(200)
            .style("fill", "#bfff00");
        d3.select(this).select("text").attr("display", "block");
    }


    


  console.log(svgRef);
//   arcs
//    .select("#tooltip").append("svg:svg");
   
  }, [Data, svgRef.current]); // redraw chart if data changes
  
  return <svg ref={svgRef} />;

}


const pieChart: React.FC = () => {
    const svg = React.useRef<SVGSVGElement>(null);
    const data: number[] = [420, 80, 130, 210, 510, 20];
  
    // React.useEffect(() => {
    //   PieChart(svg,{width:500, height:500});
    // }, [svg]);
    // interface Props {
    //   Data:number[]
    // }
    //const _Pros:Props.Data = data;
    return (
      <div id="pidchart">
         <PieChart Data={data} />
      </div>
    );
  };
  
  export default pieChart;