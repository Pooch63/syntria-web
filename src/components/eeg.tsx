// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// interface EEGWaveformProps {
//   width?: number;
//   height?: number;
//   className?: string;
// }

// interface DataPoint {
//   x: number;
//   y: number;
// }

// interface Channel {
//   offset: number;
//   color: string;
//   opacity: number;
// }

// const EEGWaveform: React.FC<EEGWaveformProps> = ({
//   width = 800,
//   height = 200,
//   className = "",
// }) => {
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove();

//     const margin = { top: 20, right: 20, bottom: 20, left: 20 };
//     const innerWidth = width - margin.left - margin.right;
//     const innerHeight = height - margin.top - margin.bottom;

//     const g = svg
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);
//     const yScale = d3.scaleLinear().domain([-1, 1]).range([innerHeight, 0]);

//     const generateEEGData = (offset: number = 0): DataPoint[] => {
//       const data: DataPoint[] = [];
//       for (let i = 0; i <= 100; i++) {
//         const baseFreq = 0.3;
//         const highFreq = 2;
//         const noise = (Math.random() - 0.5) * 0.2;

//         const value =
//           Math.sin((i + offset) * baseFreq) * 0.4 +
//           Math.sin((i + offset) * highFreq) * 0.2 +
//           noise;

//         data.push({ x: i, y: value });
//       }
//       return data;
//     };

//     const line = d3
//       .line<DataPoint>()
//       .x(d => xScale(d.x))
//       .y(d => yScale(d.y))
//       .curve(d3.curveCardinal);

//     const channels: Channel[] = [
//       { offset: 0, color: '#3B82F6', opacity: 0.8 },
//       { offset: 30, color: '#8B5CF6', opacity: 0.6 },
//     ];

//     const intervals: NodeJS.Timeout[] = [];

//     channels.forEach((channel, index) => {
//       const path = g
//         .append("path")
//         .datum(generateEEGData(channel.offset))
//         .attr("fill", "none")
//         .attr("stroke", channel.color)
//         .attr("stroke-width", 2)
//         .attr("opacity", channel.opacity)
//         .attr("d", line)
//         .attr("transform", `translate(0, ${index * 40})`);

//       const animate = () => {
//         const newData = generateEEGData(Date.now() * 0.02 + channel.offset);
//         path
//           .datum(newData)
//           .transition()
//           .duration(140)
//           .ease(d3.easeLinear)
//           .attr("d", line);
//       };

//       const interval = setInterval(animate, 150);
//       intervals.push(interval);
//     });

//     return () => {
//       intervals.forEach(interval => clearInterval(interval));
//     };
//   }, [width, height]);

//   return (
//     <div className={`bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 ${className}`}>
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold text-gray-800 mb-1">Live EEG Signal</h3>
//         <p className="text-sm text-gray-600">Real-time brainwave monitoring</p>
//       </div>
//       <svg
//         ref={svgRef}
//         width={width}
//         height={height}
//         className="w-full h-auto"
//         viewBox={`0 0 ${width} ${height}`}
//       />
//     </div>
//   );
// };

// export default EEGWaveform;
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface EEGWaveformProps {
 width?: number;
 height?: number;
 className?: string;
 updateSpeed?: number;
 header?: string;
 subheader?: string;
}

interface DataPoint {
 x: number;
 y: number;
}

interface Channel {
 offset: number;
 color: string;
 opacity: number;
}

const EEGWaveform: React.FC<EEGWaveformProps> = ({ 
 width = 800, 
 height = 200,
 className = "",
 updateSpeed = 50,
 header = "Live EEG Signal",
 subheader = "Real-time brainwave monitoring"
}) => {
 const svgRef = useRef<SVGSVGElement>(null);

 useEffect(() => {
   if (!svgRef.current) return;

   const svg = d3.select(svgRef.current);
   svg.selectAll("*").remove();

   const margin = { top: 20, right: 20, bottom: 20, left: 20 };
   const innerWidth = width - margin.left - margin.right;
   const innerHeight = height - margin.top - margin.bottom;

   const g = svg.append("g")
     .attr("transform", `translate(${margin.left},${margin.top})`);

   // Create scales
   const xScale = d3.scaleLinear()
     .domain([0, 100])
     .range([0, innerWidth]);

   const yScale = d3.scaleLinear()
     .domain([-1, 1])
     .range([innerHeight, 0]);

   // Generate EEG-like data
   const generateEEGData = (offset: number = 0): DataPoint[] => {
     const data: DataPoint[] = [];
     for (let i = 0; i <= 100; i++) {
       const baseFreq = 0.3;
       const highFreq = 2;
       const noise = (Math.random() - 0.5) * 0.3;
       
       const value = 
         Math.sin((i + offset) * baseFreq) * 0.4 +
         Math.sin((i + offset) * highFreq) * 0.2 +
         Math.sin((i + offset) * 1.2) * 0.1 +
         noise;
       
       data.push({ x: i, y: value });
     }
     return data;
   };

   // Create line generator
   const line = d3.line<DataPoint>()
     .x(d => xScale(d.x))
     .y(d => yScale(d.y))
     .curve(d3.curveCardinal);

   // Create multiple EEG channels
   const channels: Channel[] = [
     { offset: 0, color: '#3B82F6', opacity: 0.8 },
     { offset: 20, color: '#8B5CF6', opacity: 0.6 },
    //  { offset: 40, color: '#06B6D4', opacity: 0.4 }
   ];

   const intervals: NodeJS.Timeout[] = [];

   channels.forEach((channel, index) => {
     const path = g.append("path")
       .datum(generateEEGData(channel.offset))
       .attr("fill", "none")
       .attr("stroke", channel.color)
       .attr("stroke-width", 2)
       .attr("opacity", channel.opacity)
       .attr("d", line)
       .attr("transform", `translate(0, ${index * 20})`);

     // Animate the EEG wave
     const animate = (): void => {
       const newData = generateEEGData(Date.now() * 0.05 + channel.offset);
       path.datum(newData)
         .transition()
         .duration(updateSpeed)
         .ease(d3.easeLinear)
         .attr("d", line);
     };

     // Start animation
     const interval = setInterval(animate, updateSpeed);
     intervals.push(interval);
   });

   // Cleanup function
   return () => {
     intervals.forEach(interval => clearInterval(interval));
   };
 }, [width, height]);

 return (
   <div className={`bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 ${className}`}>
     <div className="mb-4">
       <h3 className="text-lg font-semibold text-gray-800 mb-1">{header}</h3>
       <p className="text-sm text-gray-600">{subheader}</p>
     </div>
     <svg
       ref={svgRef}
       width={width}
       height={height}
       className="w-full h-auto"
       viewBox={`0 0 ${width} ${height}`}
     />
   </div>
 );
};

export default EEGWaveform;