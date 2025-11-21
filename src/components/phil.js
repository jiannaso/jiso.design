import { useEffect, useRef, useState, useCallback } from 'react';
import ForceGraph2D from "react-force-graph-2d";

import { forceCollide } from 'd3-force';
import initData from './data/data.json';
import Header from './header';

export const Phil = (props) => {
    
    const fgRef = useRef();
    const [graphData, setGraphData] = useState({ nodes: initData.nodes, links: initData.links });
    const [index, setIndex] = useState(0);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [hoveredLinks, setHoveredLinks] = useState([]);
    const pinkColor = 'rgba(255, 120, 172)'
    const [displayedNodes, setDisplayedNodes] = useState([]);

    const handleNodeHover = (node) => {
        if (node && !displayedNodes.includes(node.id)) {
            console.log("hovered node:", node);
            // console.log("hovered node id:", node.id);
            // console.log("hovered node radius:", node.radius);
            setHoveredNode(node);
            setHoveredLinks(graphData.links.filter(link => link.source.id === node.id || link.target.id === node.id));
        }
        else {
            setHoveredNode(null);
            setHoveredLinks([]);

        }
    }

    const handleLinkHover = (link) => {
        if (link) {
            // console.log("hovered node id:", node.id);
            // console.log("hovered node radius:", node.radius);
            setHoveredLinks([link]);
        }
        else {
            setHoveredNode(null);
            setHoveredLinks([]);

        }
    }

    const handleNodeClick = (node) => {
        if (node && !displayedNodes.includes(node.id)) {
            // setHoveredLinks(prev => ({
            //     [...prev, ...[node]]
            // })
            // );
            setDisplayedNodes(prevArray => [...prevArray, node.id])
            console.log(displayedNodes)
            setHoveredNode(null);
        }
        else {
            setHoveredNode(null);
            setHoveredLinks([]);
        }
    }

    // draw 2D node
    const drawNode = (node, ctx, globalScale) => {
        const label = node.id;
        const fontSize = node.radius * 0.15;
        ctx.font = `${fontSize}px Hanken Grotesk`;
        const textWidth = ctx.measureText(label).width;
        const padding = 5; // adjust for desired padding
        let nodeColor = 'white'

        const circleRadius = 1;

        // if (node.id === goal_summary || node.id === person1 || node.id === person2 || node.id === person3) {

            const cornerRadius = 10;

            ctx.beginPath();
            ctx.moveTo(node.x - textWidth / 2 - padding + cornerRadius, node.y - fontSize / 2 - padding);
            ctx.lineTo(node.x + textWidth / 2 + padding - cornerRadius, node.y - fontSize / 2 - padding);
            ctx.quadraticCurveTo(node.x + textWidth / 2 + padding, node.y - fontSize / 2 - padding, node.x + textWidth / 2 + padding, node.y - fontSize / 2 - padding + cornerRadius);
            ctx.lineTo(node.x + textWidth / 2 + padding, node.y + fontSize / 2 + padding - cornerRadius);
            ctx.quadraticCurveTo(node.x + textWidth / 2 + padding, node.y + fontSize / 2 + padding, node.x + textWidth / 2 + padding - cornerRadius, node.y + fontSize / 2 + padding);
            ctx.lineTo(node.x - textWidth / 2 - padding + cornerRadius, node.y + fontSize / 2 + padding);
            ctx.quadraticCurveTo(node.x - textWidth / 2 - padding, node.y + fontSize / 2 + padding, node.x - textWidth / 2 - padding, node.y + fontSize / 2 + padding - cornerRadius);
            ctx.lineTo(node.x - textWidth / 2 - padding, node.y - fontSize / 2 - padding + cornerRadius);
            ctx.quadraticCurveTo(node.x - textWidth / 2 - padding, node.y - fontSize / 2 - padding, node.x - textWidth / 2 - padding + cornerRadius, node.y - fontSize / 2 - padding);
            ctx.closePath();
            ctx.fillStyle = nodeColor;
            ctx.fill();
            // if (node.id === person1 || node.id === person2 || node.id === person3) {
                // ctx.strokeStyle = 'black';
                // ctx.lineWidth = 2;
                // ctx.stroke();
            // }
        // } else {
            // Draw the circle background for other nodes
            ctx.beginPath();
            ctx.arc(node.x, node.y, circleRadius / 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = nodeColor;
            ctx.fill();
        // }

        // Draw the text
        const textColor = node == hoveredNode ? pinkColor : 'black';
        ctx.strokeStyle = nodeColor;
        ctx.lineWidth = 3;
        ctx.strokeText(label, node.x, node.y);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = textColor;  // text color
        ctx.fillText(label, node.x, node.y);
        const textStroke = displayedNodes.includes(node.id) ? .25 : .05;
        ctx.strokeStyle = textColor; // text stroke color
        ctx.lineWidth = textStroke;; // text stroke width
        ctx.strokeText(label, node.x, node.y);
    } 

    // Make sure nodes don't overlap
    useEffect(() => {
        const fg = fgRef.current;
        fg.d3Force('collide', forceCollide(5));
        fgRef.current.d3Force('link').distance(link => link.distance ? link.distance : 80);
    }, [graphData]);

    return (
        <>
        <div style={{height:'50%', backgroundColor:'white'}}>
            
            <Header />
            <p style={{textAlign:'center', color: 'gray'}}>DESIGN PHILOSOPHY</p>
            <div style={{display:'flex', flexDirection:'row', margin: 'auto', justifyContent:'center', color: 'black'}}>
            {/* {displayedNodes.length > 0 ? displayedNodes.map((node) => <h4>{node} {'\u00A0'}</h4>):null} */}
            {displayedNodes.length === 0 && hoveredNode === null ? <h3 style={{color:'black'}}>what do you dream of?</h3>: null}
            {displayedNodes.length > 0 ? displayedNodes.map((node) => <h3 style={{color:'black'}}>{node} {'\u00A0'} </h3>):null}
            {hoveredNode ?  <h3>{hoveredNode.id} {'\u00A0'}</h3> : null}
            </div>

            <ForceGraph2D
                zoom={5}
                zoomToFit={true}
                ref={fgRef}
                graphData={graphData}
                backgroundColor="#ffffff"
                forceEngine='d3'
                // nodeLabel="id"
                labelColor={'black'}
                nodeCanvasObject={drawNode}
                enablePanInteraction={true}
                enableNodeDrag={true}
                onNodeHover={handleNodeHover}
                onNodeClick={handleNodeClick}
                onLinkHover={handleLinkHover}
                linkColor={link => {
                    if (hoveredLinks.includes(link)) {
                        return pinkColor;
                    }
                    return '#d3d3d3';
                    }   
                }
                onNodeDragEnd={node => {
                    node.fx = node.x;
                    node.fy = node.y;
                    node.fz = node.z;
                }}
                linkWidth={1}
                linkCurvature={.1}
                onEngineStop={() => fgRef.current.zoomToFit(500)}

            />
        { hoveredNode?
        <div>
            <div style={{position:'absolute', top: '50vh', left:'50vw', display: 'block', mixBlendMode:'multiply'}}>
            <img src={require('../media/flower.jpeg')} alt="phil" style={{width: '100px', height: '100px', marginTop: '10px'}}/>
            </div>
            
            <div className="draggable" style={{position:'absolute', top: '50vh', left:'50vw', display: 'block', mixBlendMode:'hard-light'}}>
            <img src={require('../media/flower.jpeg')} alt="phil" style={{width: '100px', height: '100px', marginTop: '10px'}}/>
            </div>
            </div>
            : null

        }
        </div>
        <p style={{textAlign:'center', color: 'black'}}>hello</p>
        <p style={{textAlign:'center', color: 'black'}}>hello</p>
        <p style={{textAlign:'center', color: 'black'}}>hello</p>
        <p style={{textAlign:'center', color: 'black'}}>hello</p>

        </>
    );
}

export default Phil;