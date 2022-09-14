import * as React from "react";
import * as d3 from "d3";

import css from "styled-jsx/css";

<style jsx>{`
#tooltip {
  position: absolute;
  width: 200px;
  height: auto;
  padding: 10px;
  background-color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  -mox-box-shadow: 4px 4px 4px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 10px rbga(0, 0, 0, 0.4) pointer-events: none;
}
#tooltip.hidden {
  opacity: 0;
}
#tooltip p {
  margin: 0;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 20px;
}
`}</style>

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
    //.select("body")    
    //.append("svg")
    .attr("width", svgDimensions.width)
    .attr("height", svgDimensions.height)
    .style("border", "1px solid rgba(0,0,0,0.2)");

  const g = svg
    // .select("svg")
    .append("g")
    .attr("class", "g1")    
    .attr("transform",`translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`
    );
    
  const color = d3.scaleOrdinal([
    "#ff9800",
    "#ffa726",
    "#ffb74d",
    "#ffcc80",
    "#ffe0b2",
    "#fff3e0",
  ]);
  const pie = d3.pie();
  const arc:any = d3.arc().innerRadius(0).outerRadius(radius);

  const arcs = g
    .selectAll("arc")
    .data(pie(data))    
    .enter()
    .append("g")
    .attr("class", "arc");
  arcs
    .append("path")
    .attr("fill", (d, i:any) => color(i))  
    .attr("d", arc);  

  console.log(svgRef);
  arcs
   .select("#tooltip").append("svg:svg");
   
  }, [Data, svgRef.current]); // redraw chart if data changes
  
  return <svg ref={svgRef} />;

}


const pieChart: React.FC = () => {
    const svg = React.useRef<SVGSVGElement>(null);
    const data: number[] = [420, 80, 130, 210, 510, 80];
  
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