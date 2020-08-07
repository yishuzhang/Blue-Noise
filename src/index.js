// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import * as d3 from 'd3'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as d3 from 'd3'

        
// //draw lines for the links 
// var link = svg.append("g")
//       .attr("class", "links")
//       .selectAll("line")
//       .data(links_data)
//       .enter().append("line")
//       .attr("stroke-width", 2)
//       .style("stroke", linkColour);    
    
//         return (simulation.on("tick", tickActions(node, link) ));
//     }
    
    
// }
/* //create somewhere to put the force directed graph
var svg = d3.select("svg"),
 width = +svg.attr("width"),
 height = +svg.attr("height"); */
 
//d3 code goes here 

//Characters
var nodes_data =  [
    {"name": "Lillian", "sex": "F"},
    {"name": "Gordon", "sex": "M"},
    {"name": "Sylvester", "sex": "M"},
    {"name": "Mary", "sex": "F"},
    {"name": "Helen", "sex": "F"},
    {"name": "Jamie", "sex": "M"},
    {"name": "Jessie", "sex": "F"},
    {"name": "Ashton", "sex": "M"},
    {"name": "Duncan", "sex": "M"},
    {"name": "Evette", "sex": "F"},
    {"name": "Mauer", "sex": "M"},
    {"name": "Fray", "sex": "F"},
    {"name": "Duke", "sex": "M"},
    {"name": "Baron", "sex": "M"},
    {"name": "Infante", "sex": "M"},
    {"name": "Percy", "sex": "M"},
    {"name": "Cynthia", "sex": "F"}
]


  



// function box_force() { 
//     for (var i = 0, n = nodes_data.length; i < n; ++i) {
//         var curr_node = nodes_data[i];
//         curr_node.x = Math.max(radius, Math.min(width - radius, curr_node.x));
//         curr_node.y = Math.max(radius, Math.min(height - radius, curr_node.y));
//     }
// }

//Function to choose what color circle we have
//Let's return blue for males and red for females
function circleColour(d){
	if(d.sex =="M"){
		return "blue";
	} else {
		return "pink";
	}
}



//Relationships
//type: A for Ally, E for Enemy
var links_data = [
    {"source": "Sylvester", "target": "Gordon", "type":"A" },
    {"source": "Sylvester", "target": "Lillian", "type":"A" },
    {"source": "Sylvester", "target": "Mary", "type":"A"},
    {"source": "Sylvester", "target": "Jamie", "type":"A"},
    {"source": "Sylvester", "target": "Jessie", "type":"A"},
    {"source": "Sylvester", "target": "Helen", "type":"A"},
    {"source": "Helen", "target": "Gordon", "type":"A"},
    {"source": "Mary", "target": "Lillian", "type":"A"},
    {"source": "Ashton", "target": "Mary", "type":"A"},
    {"source": "Duncan", "target": "Jamie", "type":"A"},
    {"source": "Gordon", "target": "Jessie", "type":"A"},
    {"source": "Sylvester", "target": "Fray", "type":"E"},
    {"source": "Fray", "target": "Mauer", "type":"A"},
    {"source": "Fray", "target": "Cynthia", "type":"A"},
    {"source": "Fray", "target": "Percy", "type":"A"},
    {"source": "Percy", "target": "Cynthia", "type":"A"},
    {"source": "Infante", "target": "Duke", "type":"A"},
    {"source": "Duke", "target": "Gordon", "type":"A"},
    {"source": "Duke", "target": "Sylvester", "type":"A"},
    {"source": "Baron", "target": "Duke", "type":"A"},
    {"source": "Baron", "target": "Sylvester", "type":"E"},
    {"source": "Evette", "target": "Sylvester", "type":"E"},
    {"source": "Cynthia", "target": "Sylvester", "type":"E"},
    {"source": "Cynthia", "target": "Jamie", "type":"E"},
    {"source": "Mauer", "target": "Jessie", "type":"E"}
]



//Function to choose the line colour and thickness 
//If the link type is "A" return green 
//If the link type is "E" return red 
function linkColour(d){
	console.log(d);	
	if(d.type == "A"){
		return "green";
	} else {
		return "red";
	}
}

/* function bluenoise_force() { 
    for (var i = 0, n = nodes_data.length; i < n; ++i) {
      curr_node = nodes_data[i];
      // do things here to change the position and velocity of curr_node
      // position is curr_node.x, curr_node.y
      // velocity is curr_node.vx, curr_node.vy
    }
  } */



function tickActions() {
    //update circle positions to reflect node updates on each tick of the simulation 
    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
    
    //update link positions 
    //simply tells one end of the line to follow one node around
    //and the other end of the line to follow the other node around
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
}



var svg = d3.select("svg"),
 width = +svg.attr("width"),
 height = +svg.attr("height");


//set up the simulation 
//nodes only for now 
var simulation = d3.forceSimulation()
                .nodes(nodes_data);
        
//add forces
//we're going to add a charge to each node 
//also going to add a centering force
simulation
    .force("charge_force", d3.forceManyBody())
    .force("center_force", d3.forceCenter(width / 2, height / 2))
            /* .force("box_force", box_force) */;
    
        //draw circles for the nodes 
        var node = svg.append("g")
                        .attr("class", "nodes")
                        .selectAll("circle")
                        .data(nodes_data)
                        .enter()
                        .append("circle")
                        .attr("r", 5)
                        .attr("fill", circleColour);

        var link_force =  d3.forceLink(links_data)
                            .id(function(d) { return d.name; })

        simulation.force("links",link_force);
    

        
        //draw lines for the links 
        var link = svg.append("g")
                      .attr("class", "links")
                      .selectAll("line")
                      .data(links_data)
                      .enter().append("line")
                      .attr("stroke-width", 2)
                      .style("stroke", linkColour);    
    
        simulation.on("tick", tickActions);



 
