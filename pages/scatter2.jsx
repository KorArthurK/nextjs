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
//import csvFile from '../csv/auto-mpg.csv';

const ScatterChart = () => {

    const svgRef = useRef(null);
    useEffect(() => {
    const svg = d3.select(svgRef.current)  //select('div')
        .append('svg')
        .attr('width', 1200)
        .attr('height', 500);
  
    const width = +svg.attr('width');
    const height = +svg.attr('height');
  
    const render = data => {
    const title = 'Cars: Horsepower vs Weight';
    const xValue = d => d.horsepower; // d.population
    const xAxisLabel = 'Horsepower';
  
    const yValue = d => d.weight;
    const yAxisLabel = 'Weight';
    
    const margin = {
      top: 80,
      right: 40,
      left: 150,
      bottom: 70,
    };

    const innerWidth = width - margin.right - margin.left;
    const innerHeight = height - margin.top - margin.bottom;
    const circleRadius = 10;
  
    const xScale = scaleLinear()  // (*) scaleLinear
      .domain(extent(data, xValue))  // (*) extent
      .range([0, innerWidth])
      .nice();
  
    const yScale = scaleLinear() // (*) scaleLinear
      .domain(extent(data, yValue)) // (*) extent
      .range([0, innerHeight])
      .nice();
  
    // Add margins
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
    // Styling ticks
    const xAixs = axisBottom(xScale).tickSize(-innerHeight).tickPadding(15);
    const yAxis = axisLeft(yScale).tickSize(-innerWidth).tickPadding(10);
  
    // Add axis and label
    const yAxisG = g.append('g').call(yAxis);
  
    yAxisG.selectAll('.domain').remove();
    yAxisG
      .append('text')
      .attr('class', 'axis-label')
      .attr('y', -80)
      .attr('x', -innerHeight / 2)
      .attr('fill', 'black')
      .attr('transform', `rotate(-90)`)
      .attr('text-anchor', `middle`)
      .text(yAxisLabel);
  
    const xAxisG = g
      .append('g')
      .call(xAixs)
      .attr('transform', `translate(0, ${innerHeight})`);
  
    xAxisG.select('.domain').remove();
    xAxisG
      .append('text')
      .attr('class', 'axis-label')
      .attr('y', 60)
      .attr('x', innerWidth / 2)
      .attr('fill', 'black')
      .text(xAxisLabel);
  
    // Add a title
    g.append('text').attr('class', 'title').attr('y', -10).text(title);
  
    // Create circles (data join)
    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cy', d => yScale(yValue(d)))
      .attr('cx', d => xScale(xValue(d)))
      .attr('r', circleRadius);
  };
  
  // Represent a data table
  csv('https://vizhub.com/curran/datasets/auto-mpg.csv')
  //csv('../csv/auto-mpg.csv')
    .then(data => {
      data.forEach(d => {
        d.mpg = +d.mpg;
        d.cylinders = +d.cylinders;
        d.displacement = +d.displacement;
        d.horsepower = +d.horsepower;
        d.weight = +d.weight;
        d.acceleration = +d.acceleration;
        d.year = +d.year;
      });
      render(data);
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