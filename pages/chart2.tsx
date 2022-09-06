import * as React from "react";
import * as d3 from "d3";
import css from "styled-jsx/css";

function drawChart(svgRef: React.RefObject<SVGSVGElement>) {

  // const style = css`
  // #chart-container {
  //   margin: 100px auto;
  //   padding: 10px 20px;
  //   width: 1000px;
  //   height: 500px;
  //   border: 1px solid #ccc;
  //   background-color: white;
  // }`;
  const data = [12, 5, 6, 6, 9, 10,13,19,20,22,30,33,40,45,20];
  const X =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const height = 500;
  const width = 1000;
  const svg = d3.select(svgRef.current);
  const topPadding = 70;	// 상단 간격
  const leftPadding = 50;	// 좌측 간격
  const barPadding = 5;		// 바 사이 간격
  const duration = 1000;	// 바 transition duration
  const marginLeft = 50;
  const marginRight = 30;
  const margintop = 30;
  

  const yType = d3.scaleLinear; // type of y-scale
  const yRange = [height - 10, 10];
  const yDomain = [0, 50];
  const yScale = yType(yDomain, yRange);

  let xDomain = [1,2,3,4,5,10];
  const xDomain2 = new d3.InternSet(xDomain);
  const xRange = [marginLeft, width - marginRight];
  const xPadding = 0.1;
  const xScale = d3.scaleBand(xDomain2, xRange).padding(xPadding);

  function position(rect:any, x:any, y:any) {
    return rect
    .attr("x", x)
    .attr("y", y)
    .attr("height", typeof y === "function" ? (i: any) => yScale(0) - y(i) : (i: any) => yScale(0) - y)
    .attr("width", xScale.bandwidth());
  }

  svg
    .attr("width", width)
    .attr("height", height)
    .style("margin-top", margintop)
    .style("margin-left", marginLeft)
    .style("color","blue");
  

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 40)
    .attr("y", (d, i) => height - 10 * d)
  //   .attr("x",0) //x 좌표 0으로 설정
  //   .attr("y",0) //y 좌표 0으로 설정
    .attr("width", 20)
    .attr("height", (d, i) => d * 10)
    
    .attr("rx", 30)
    .attr("ry", 30)
    .attr("stroke-width",5)
    .attr("stroke","green")  
    //.style("color","black");
    // .style("color", function() {
    //   return "hsl(" + Math.random() * 360 + ",100%,50%)";
    // })    
    //.attr("fill", "steelblue");
    .style("fill", function() {
      return "hsl(" + Math.random() * 400 + ",100%,50%)";
      })
    //.attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; });
    //.style("fill", d3.scale.category20c()); 
  // svg
  //     .selectAll('g')  
  // 	.style('stroke', '#ccc');

  svg
      .selectAll('g')
  	.data(data)
  	.enter().append('text')
  	// .attr('x', leftPadding)
  	// .attr('y', function (d, i) {
  	// 	return i * ((h - topPadding) / data.length) + (h / data.length / 2);
  	// })
      .attr("x", (d, i) => i * 40 + 25)
      .attr("y", (d, i) => height - 10 * d)
  	.attr('dx', -5)
  	.attr('text-anchor', 'end')
    .style('stroke', '#ccc')
  	.text(function (d) {
  		return d;
  	});

  svg 
    .append('line')    
    .attr("class", "grid")
   // .attr("x1", 1)
    .attr("x2", width - marginLeft - marginRight )
    //.attr("y2", 10)
    .attr("stroke", "black")
    .attr("stroke-opacity", 0.1);

  svg 
    .append('line')    
    .attr("class", "grid")
    .attr("x2", width - marginLeft - marginRight )
    .attr("y2", 2000)
    .attr("stroke", "black")
    .attr("stroke-opacity", 0.1);
    

  // 차트 우측 상단에 표시
  svg
      .append('text')
      .text('Test Data Display')
      .attr('x', 600)
      .attr('y', 20)
      .attr('text-anchor', 'end')
      .attr('font-size', '15px')
      .style('stroke', 'black')
      .attr('fill', 'red');

  // svg
  //   .append("line")
  //   .attr("class", "grid")
  //   .attr("x2", width - marginLeft - marginRight)
  //   .attr("stroke", "currentColor")
  //   .attr("stroke-opacity", 0.1);
  
  
}

// const yAxisGenerator = d3
//     .axisLeft()
//     .scale(yScale);


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