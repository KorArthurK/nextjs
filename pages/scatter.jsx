import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import rawFile from "../Json/weather.json";

// const LineChart = ({ Data, data_type }) => {
const LineChart = () => {

    const svgRef = useRef(null);
    //const tooltipRef = useRef(null);

    // Access data
    async function drawScatter(){        
        const dataset = JSON.stringify(rawFile);        
        //const dataset = await d3.json(pathToJSON);
        //console.log(dataset);

        const xAccessor = d => d.dewPoint
        const yAccessor = d => d.humidity
        // 이슬점과 습도에 따른 구름의 양 변화 알아보기. 점의 크기와 색상을 통해 차원 추가가 가능하다.
        const colorAccessor = d => d.cloudCover

        const width = d3.min([window.innerWidth * 0.9, window.innerHeight * 0.9])

        // 거의 탬플릿
        let dimensions = {
            width: width, // 정사각형
            height: width,
            margin: {
            top: 10,
            right: 10,
            bottom: 50, // 왼쪽과 아래에 축, 레이블, 범례 추가할것임
            left: 50, // 왼쪽과 아래에 축, 레이블, 범례 추가할것임
            },  
        }
        dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
        dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

        // Draw canvas - wrapper
        const wrapper = d3.select(svgRef.current)        
        .append("svg")
        // Note that these width and height sizes are the size "outside" of our plot
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
      //  .data(dataset);

        // Draw canvas - bounds
        const bounds = wrapper.append("g")
        // Create a group element to move the inner part of our chart to the right and down
        .style("transform", `translate(${ // 바운드 꼭지점을 이동시켜주는것 포함
               dimensions.margin.left
               }px, ${
               dimensions.margin.top
               }px)`)

        // x축 스케일 만들기
        const xScale = d3.scaleLinear()
        .domain(d3.extent(dataset, xAccessor))  // 최대, 최소값. 해당 함수 input은 array / accessor function
        .range([0, dimensions.boundedWidth])    // svg는 css처럼 동적으로 크기 조절하기 어려움으로 dimension을 이용한다.
        // Current scale would be [8.19, 58.38] - let's use .nice() to make a friendlier scale
        .nice()
        // Now our scale is [5, 60] - offering better readability and avoiding smushing dots to the edge

        bounds.append("circle")
        .attr("cx", dimensions.boundedWidth / 2)
        .attr("cy", dimensions.boundedHeight / 2)
        .attr("r", 5)


        dataset.forEach(d => {
        bounds
        .append("circle")
        .attr("cx", xScale(xAccessor(d)))
        .attr("cy", yScale(yAccessor(d)))
        .attr("r", 5)
        })    
    }

    useEffect(() => {
        drawScatter();       

    }, []); 

    return (
        <div className="scatter-chart">
        <wrapper ref={svgRef} />
    {/* <div ref={tooltipRef} className="lc-tooltip">
      <div className="data"></div>
      <div className="date"></div>
    </div> */}
        </div>
    );
};




//const pieChart: React.FC = () => {

const Test = () =>{    
return (
  <>
    {/* <LineChart Data={data} data_type="campaign_conversions" /> */}
    <LineChart/>
  </>
);
};

export default Test;
