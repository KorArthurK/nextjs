import {
    csv,
    select,
    scaleLinear,
    axisLeft,
    axisBottom,
    format,
    extent,
  } from 'd3';
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { scatterPlot } from '../components/scatterPlot';
import { dropdownMenu } from '../components/dropdownMenu';



//import csvFile from '../csv/auto-mpg.csv';

const ScatterChart = () => {

    const svgRef = useRef(null);
    useEffect(() => {

    const menus = select('body').append('div').attr('class', 'menus');
    const chart = select('body').append('div').attr('class', 'chart');
    const svg = d3.select(svgRef.current)  //select('div')
   
//const svg = select('.chart')
        .append('svg')
        .attr('width', 1200)
        .attr('height', 500);

    const yMenu = select('.menus').append('span').attr('class', 'y-menu');
    const xMenu = select('.menus')
        .append('span')
        .attr('class', 'x-menu')
        .append('text')
        .text(' vs ');

const width = +svg.attr('width');
const height = +svg.attr('height');

// State
let data;
let xColumn;
let yColumn;

const onXColumnClicked = col => {
  xColumn = col;
  render();
};

const onYColumnClicked = col => {
  yColumn = col;
  render();
};

const render = () => {
  // Create select and options
  xMenu.call(dropdownMenu, {
    options: data.columns,
    onOptionClicked: onXColumnClicked,
  });

  yMenu.call(dropdownMenu, {
    options: data.columns,
    onOptionClicked: onYColumnClicked,
  });

  // Create Scatter Plot
  svg.call(scatterPlot, {
    width,
    height,
    xValue: d => d[xColumn],
    xAxisLabel: xColumn,
    yValue: d => d[yColumn],
    yAxisLabel: yColumn,
    margin: {
      top: 80,
      right: 40,
      left: 100,
      bottom: 70,
    },
    circleRadius: 10,
    data,
  });
};

// Represent a data table
csv('https://vizhub.com/curran/datasets/auto-mpg.csv')
  .then(loadedData => {
    // Set State
    data = loadedData;

    data.forEach(d => {
      d.mpg = +d.mpg;
      d.cylinders = +d.cylinders;
      d.displacement = +d.displacement;
      d.horsepower = +d.horsepower;
      d.weight = +d.weight;
      d.acceleration = +d.acceleration;
      d.year = +d.year;
    });

    // set initial axis labels
    yColumn = data.columns[0];
    xColumn = data.columns[4];
    render();
  })
  .catch(error => console.log(error));





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


const Test = () =>{    
return (
  <>
    {/* <LineChart Data={data} data_type="campaign_conversions" /> */}
    <ScatterChart/>
  </>
);
};

export default Test;