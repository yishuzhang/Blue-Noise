// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';
// // import * as d3 from 'd3'

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();

// import React from 'react'
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as d3 from 'd3'


// // //draw lines for the links 
// // var link = svg.append("g")
// //       .attr("class", "links")
// //       .selectAll("line")
// //       .data(links_data)
// //       .enter().append("line")
// //       .attr("stroke-width", 2)
// //       .style("stroke", linkColour);    

// //         return (simulation.on("tick", tickActions(node, link) ));
// //     }


// // }
// /* //create somewhere to put the force directed graph
// var svg = d3.select("svg"),
//  width = +svg.attr("width"),
//  height = +svg.attr("height"); */

// //d3 code goes here 

// //Characters
// var nodes_data =  [
//     {"name": "Lillian", "sex": "F"},
//     {"name": "Gordon", "sex": "M"},
//     {"name": "Sylvester", "sex": "M"},
//     {"name": "Mary", "sex": "F"},
//     {"name": "Helen", "sex": "F"},
//     {"name": "Jamie", "sex": "M"},
//     {"name": "Jessie", "sex": "F"},
//     {"name": "Ashton", "sex": "M"},
//     {"name": "Duncan", "sex": "M"},
//     {"name": "Evette", "sex": "F"},
//     {"name": "Mauer", "sex": "M"},
//     {"name": "Fray", "sex": "F"},
//     {"name": "Duke", "sex": "M"},
//     {"name": "Baron", "sex": "M"},
//     {"name": "Infante", "sex": "M"},
//     {"name": "Percy", "sex": "M"},
//     {"name": "Cynthia", "sex": "F"}
// ]






// // function box_force() { 
// //     for (var i = 0, n = nodes_data.length; i < n; ++i) {
// //         var curr_node = nodes_data[i];
// //         curr_node.x = Math.max(radius, Math.min(width - radius, curr_node.x));
// //         curr_node.y = Math.max(radius, Math.min(height - radius, curr_node.y));
// //     }
// // }

// //Function to choose what color circle we have
// //Let's return blue for males and red for females
// function circleColour(d){
// 	if(d.sex =="M"){
// 		return "blue";
// 	} else {
// 		return "pink";
// 	}
// }



// //Relationships
// //type: A for Ally, E for Enemy
// var links_data = [
//     {"source": "Sylvester", "target": "Gordon", "type":"A" },
//     {"source": "Sylvester", "target": "Lillian", "type":"A" },
//     {"source": "Sylvester", "target": "Mary", "type":"A"},
//     {"source": "Sylvester", "target": "Jamie", "type":"A"},
//     {"source": "Sylvester", "target": "Jessie", "type":"A"},
//     {"source": "Sylvester", "target": "Helen", "type":"A"},
//     {"source": "Helen", "target": "Gordon", "type":"A"},
//     {"source": "Mary", "target": "Lillian", "type":"A"},
//     {"source": "Ashton", "target": "Mary", "type":"A"},
//     {"source": "Duncan", "target": "Jamie", "type":"A"},
//     {"source": "Gordon", "target": "Jessie", "type":"A"},
//     {"source": "Sylvester", "target": "Fray", "type":"E"},
//     {"source": "Fray", "target": "Mauer", "type":"A"},
//     {"source": "Fray", "target": "Cynthia", "type":"A"},
//     {"source": "Fray", "target": "Percy", "type":"A"},
//     {"source": "Percy", "target": "Cynthia", "type":"A"},
//     {"source": "Infante", "target": "Duke", "type":"A"},
//     {"source": "Duke", "target": "Gordon", "type":"A"},
//     {"source": "Duke", "target": "Sylvester", "type":"A"},
//     {"source": "Baron", "target": "Duke", "type":"A"},
//     {"source": "Baron", "target": "Sylvester", "type":"E"},
//     {"source": "Evette", "target": "Sylvester", "type":"E"},
//     {"source": "Cynthia", "target": "Sylvester", "type":"E"},
//     {"source": "Cynthia", "target": "Jamie", "type":"E"},
//     {"source": "Mauer", "target": "Jessie", "type":"E"}
// ]



// //Function to choose the line colour and thickness 
// //If the link type is "A" return green 
// //If the link type is "E" return red 
// function linkColour(d){
// 	console.log(d);	
// 	if(d.type == "A"){
// 		return "green";
// 	} else {
// 		return "red";
// 	}
// }

// /* function bluenoise_force() { 
//     for (var i = 0, n = nodes_data.length; i < n; ++i) {
//       curr_node = nodes_data[i];
//       // do things here to change the position and velocity of curr_node
//       // position is curr_node.x, curr_node.y
//       // velocity is curr_node.vx, curr_node.vy
//     }
//   } */



// function tickActions() {
//     //update circle positions to reflect node updates on each tick of the simulation 
//     node
//         .attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; })

//     //update link positions 
//     //simply tells one end of the line to follow one node around
//     //and the other end of the line to follow the other node around
//     link
//         .attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });
// }



// var svg = d3.select("svg"),
//  width = +svg.attr("width"),
//  height = +svg.attr("height");


// //set up the simulation 
// //nodes only for now 
// var simulation = d3.forceSimulation()
//                 .nodes(nodes_data);

// //add forces
// //we're going to add a charge to each node 
// //also going to add a centering force
// simulation
//     .force("charge_force", d3.forceManyBody())
//     .force("center_force", d3.forceCenter(width / 2, height / 2))
//             /* .force("box_force", box_force) */;

//         //draw circles for the nodes 
//         var node = svg.append("g")
//                         .attr("class", "nodes")
//                         .selectAll("circle")
//                         .data(nodes_data)
//                         .enter()
//                         .append("circle")
//                         .attr("r", 5)
//                         .attr("fill", circleColour);

//         var link_force =  d3.forceLink(links_data)
//                             .id(function(d) { return d.name; })

//         simulation.force("links",link_force);



//         //draw lines for the links 
//         var link = svg.append("g")
//                       .attr("class", "links")
//                       .selectAll("line")
//                       .data(links_data)
//                       .enter().append("line")
//                       .attr("stroke-width", 2)
//                       .style("stroke", linkColour);    

//         simulation.on("tick", tickActions);

///////////////////////////////////////////////////////////////////////////////////////////

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


// var nodes_data = [
//     { "name": "Lillian", "sex": "F" },
//     { "name": "Gordon", "sex": "M" },
//     { "name": "Sylvester", "sex": "M" },
//     { "name": "Mary", "sex": "F" },
//     { "name": "Helen", "sex": "F" },
//     { "name": "Jamie", "sex": "M" },
//     { "name": "Jessie", "sex": "F" },
//     { "name": "Ashton", "sex": "M" },
//     { "name": "Duncan", "sex": "M" },
//     { "name": "Evette", "sex": "F" },
//     { "name": "Mauer", "sex": "M" },
//     { "name": "Fray", "sex": "F" },
//     { "name": "Duke", "sex": "M" },
//     { "name": "Baron", "sex": "M" },
//     { "name": "Infante", "sex": "M" },
//     { "name": "Percy", "sex": "M" },
//     { "name": "Cynthia", "sex": "F" }
// ]

var nodes_data = [
    { "name": "hair", "sex": "M" },
    { "name": "earl", "sex": "M" },
    { "name": "earr", "sex": "M" },
    { "name": "chin", "sex": "M" },
    { "name": "neck", "sex": "M" },
    { "name": "arml", "sex": "M" },
    { "name": "armr", "sex": "M" },
    { "name": "belly", "sex": "M" },
    { "name": "feetl", "sex": "M" },
    { "name": "feetr", "sex": "M" }
]

function circleColour(d) {
    if (d.sex == "M") {
        return "blue";
    } else {
        return "pink";
    }
}


//Relationships
//type: A for Ally, E for Enemy
/* var links_data = [
    { "source": "Sylvester", "target": "Gordon", "type": "A" },
    { "source": "Sylvester", "target": "Lillian", "type": "A" },
    { "source": "Sylvester", "target": "Mary", "type": "A" },
    { "source": "Sylvester", "target": "Jamie", "type": "A" },
    { "source": "Sylvester", "target": "Jessie", "type": "A" },
    { "source": "Sylvester", "target": "Helen", "type": "A" },
    { "source": "Helen", "target": "Gordon", "type": "A" },
    { "source": "Mary", "target": "Lillian", "type": "A" },
    { "source": "Ashton", "target": "Mary", "type": "A" },
    { "source": "Duncan", "target": "Jamie", "type": "A" },
    { "source": "Gordon", "target": "Jessie", "type": "A" },
    { "source": "Sylvester", "target": "Fray", "type": "E" },
    { "source": "Fray", "target": "Mauer", "type": "A" },
    { "source": "Fray", "target": "Cynthia", "type": "A" },
    { "source": "Fray", "target": "Percy", "type": "A" },
    { "source": "Percy", "target": "Cynthia", "type": "A" },
    { "source": "Infante", "target": "Duke", "type": "A" },
    { "source": "Duke", "target": "Gordon", "type": "A" },
    { "source": "Duke", "target": "Sylvester", "type": "A" },
    { "source": "Baron", "target": "Duke", "type": "A" },
    { "source": "Baron", "target": "Sylvester", "type": "E" },
    { "source": "Evette", "target": "Sylvester", "type": "E" },
    { "source": "Cynthia", "target": "Sylvester", "type": "E" },
    { "source": "Cynthia", "target": "Jamie", "type": "E" },
    { "source": "Mauer", "target": "Jessie", "type": "E" }
] */

var links_data = [
    { "source": "hair", "target": "earl", "type": "A" },
    { "source": "hair", "target": "earr", "type": "A" },
    { "source": "earl", "target": "chin", "type": "A" },
    { "source": "earr", "target": "chin", "type": "A" },
    { "source": "chin", "target": "neck", "type": "A" },
    { "source": "neck", "target": "arml", "type": "A" },
    { "source": "neck", "target": "armr", "type": "A" },
    { "source": "neck", "target": "belly", "type": "A" },
    { "source": "belly", "target": "feetl", "type": "A" },
    { "source": "belly", "target": "feetr", "type": "A" }
]

//Function to choose the line colour and thickness 
//If the link type is "A" return green 
//If the link type is "E" return red 
function linkColour(d) {
    console.log(d);
    if (d.type == "A") {
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



function mysterious_force(alpha1) {
    
    for (var i = 0; i != nodes_data.length; ++i) {
        var curr_node = nodes_data[i];
        var rand1 = Math.floor(Math.random() * 10 ) - 10;
        var rand2 = Math.floor(Math.random() * 10 ) - 10;
        curr_node.vx += rand1 * alpha1;
        curr_node.vy += rand2 * alpha1;
        console.log("alpha = " + alpha1);
    }
}


class ForceDiagram extends React.Component {
    constructor(props) {
        super(props);
        // this.state
    }

    tickActions = () => {

        //console.log("update");
        //update circle positions to reflect node updates on each tick of the simulation 
        this.m_node
            // .attr("cx", this.count)
            // .attr("cy", this.count);
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });

        //update link positions 
        //simply tells one end of the line to follow one node around
        //and the other end of the line to follow the other node around
        this.m_link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
    }

    componentDidMount() {
        this.svg = d3.select("#svg_root").select('svg.root');
        if (this.svg.empty()) {
            this.svg = d3.select("#svg_root")
                .append("svg")
                .attr('class', 'root')
                .attr("width", 1000)
                .attr("height", 1000);
        }

        this.init();
    }
    
    resetNodes() {
        this.m_node
            // .attr("cx", this.count)
            // .attr("cy", this.count);
            .attr("cx", function (d) {d.x = 500; return d.x})
            .attr("cy", function (d) {d.y = 500;return d.x});

        //update link positions 
        //simply tells one end of the line to follow one node around
        //and the other end of the line to follow the other node around
        this.m_link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
    }

    reLoad() {
        console.log("reLoad");
        this.simulation.stop();
        this.svg.selectAll(".nodes").remove();
        this.svg.selectAll(".links").remove();
        this.resetNodes();
    }

    reLoad2() {
        console.log("reLoad2");
        this.init();
    }



    init() {
        this.simulation = d3.forceSimulation();

        this.simulation.alpha(1);
        this.simulation
            .force("charge_force", d3.forceManyBody().strength(-100))
            .force("center_force", d3.forceCenter(+1000 / 2, +1000 / 2))
            .force("collide_force", d3.forceCollide(10, 1, 100))
            .force("custom_force", mysterious_force(this.simulation.alpha()));

        this.simulation.nodes(nodes_data);

        //links
        var link_force = d3.forceLink(links_data)
            .id(function (d) { return d.name; });

        this.simulation.force("link_force", link_force);

        //tick
        this.simulation.on("tick", this.tickActions);

        //vis

        // var g = this.svg.append("g")
        // .attr("class", "everything");

        this.m_node = this.svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes_data)
            .enter()
            .append("circle")
            .attr("r", 10)
            .attr("fill", circleColour);


        //draw lines for the links 
        this.m_link = this.svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links_data)
            .enter().append("line")
            .attr("stroke-width", 3)
            .style("stroke", linkColour);



        var drag_handler = d3.drag()
                            .on("start", this.dragStart)
                            .on("drag", this.dragDrag)
                            .on("end", this.dragEnd);

        

        drag_handler(this.m_node);

        var zoom_handler = d3.zoom()
                                .on("zoom", this.zoomActions);
        zoom_handler(this.svg);
        
        //this.simulation.alpha(1).restart().tick();
    }

    zoomActions = () => {

        this.svg.selectAll("g").attr("transform", d3.event.transform);
        this.svg.on("mousedown.zoom", null);
    }

    dragStart = (d) => {       
        if (!d3.event.active)
            this.simulation.alphaTarget(0.5).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    dragDrag = (d) => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    dragEnd = (d) => {
        if (!d3.event.active)
            this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }



    render() {
        const shouldRefresh = this.props.shouldRefresh;
        if (shouldRefresh) {
            this.reLoad();
        }
        const shouldRefresh2 = this.props.shouldRefresh2;
        if (shouldRefresh2) {
            this.reLoad2();
        }
        
        return (<div id={"svg_root"}></div>);
    }
}

class PageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshGraph: false,
            refreshGraph2: false,
        };
        this.handleRefreshClicked=this.handleRefreshClicked.bind(this);
        this.handleRefreshClicked2=this.handleRefreshClicked2.bind(this);
    }
    handleRefreshClicked()
    {
        this.setState({refreshGraph: true,});
        this.setState({refreshGraph2: false,});
    }

    handleRefreshClicked2()
    {
        this.setState({refreshGraph2: true,});
        this.setState({refreshGraph: false,});
    }
    render() {
        return (
            <div className="page-layout">
                <div className="force-graph">
                    <ForceDiagram 
                        shouldRefresh={this.state.refreshGraph}
                        shouldRefresh2={this.state.refreshGraph2}
                    />
                </div>
                <div className="interactions">
                    <ol>
                        <li>
                            <button onClick = {this.handleRefreshClicked}>Click me!</button>
                            <button onClick = {this.handleRefreshClicked2}>Click me!</button>
        
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

//========================================

ReactDOM.render(
    <PageLayout />
    ,
    document.getElementById('root')
);

//export default ForceDiagram;
