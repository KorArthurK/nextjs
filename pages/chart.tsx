import * as React from "react";
import * as d3 from "d3";
// import css from "styled-jsx/css";

function drawChart(svgRef: React.RefObject<SVGSVGElement>) {

  
  const data = [12, 5, 6, 6, 9, 10,13,19,20,22,30];
  const h = 300;
  const w = 500;
  const svg = d3.select(svgRef.current);


  svg
    .attr("width", w)
    .attr("height", h)
    .style("margin-top", 50)
    .style("margin-left", 50)
    .style("color","blue");
   

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 40)
    .attr("y", (d, i) => h - 10 * d)
    // .attr("rx", 30)
    // .attr("ry", 30)
    .attr("width", 20)
    .attr("height", (d, i) => d * 10)
    
    //.style("color","black");
    // .style("color", function() {
    //   return "hsl(" + Math.random() * 360 + ",100%,50%)";
    // })    
    //.attr("fill", "steelblue");
    .style("fill", function() {
      return "hsl(" + Math.random() * 400 + ",100%,50%)";
    });    
}

const Chart: React.FC = () => {
  const svg = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    drawChart(svg);
  }, [svg]);

  return (
    <div id="chart">
      <svg ref={svg} />
    </div>
  );
};

export default Chart;
