var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        id: "0",
        name: "Countries",
        children: [{
                    id: "00",
                    name: "Habits0",
                    children: [{id:"000",name:"Australia",children:[],data:{}},
                              {id:"001",name:"Austria",children:[],data:{}},
                              {id:"002",name:"Belgium",children:[],data:{}},
                              {id:"003",name:"Canada",children:[],data:{}},
                              {id:"004",name:"Chile",children:[],data:{}},
                              {id:"005",name:"Cyprus",children:[],data:{}},
                              {id:"006",name:"Czech Republic",children:[],data:{}},
                              {id:"007",name:"Denmark",children:[],data:{}},
                              {id:"008",name:"Estonia",children:[],data:{}},
                              {id:"009",name:"Finland",children:[],data:{}},
                              {id:"0010",name:"France",children:[],data:{}},
                              {id:"0011",name:"Germany",children:[],data:{}},
                              {id:"0012",name:"Greece",children:[],data:{}},
                              {id:"0013",name:"Hungary",children:[],data:{}},
                              {id:"0014",name:"Iceland",children:[],data:{}},
                              {id:"0015",name:"Israel",children:[],data:{}},
                              {id:"0016",name:"Italy",children:[],data:{}},
                              {id:"0017",name:"Malta",children:[],data:{}},
                              {id:"0018",name:"Netherlands",children:[],data:{}},
                              {id:"0019",name:"New Zealand",children:[],data:{}},
                              {id:"0020",name:"Poland",children:[],data:{}},
                              {id:"0021",name:"Portugal",children:[],data:{}},
                              {id:"0022",name:"Russian Federation",children:[],data:{}},
                              {id:"0023",name:"Saint Lucia",children:[],data:{}},
                              {id:"0024",name:"Spain",children:[],data:{}},
                              {id:"0025",name:"Sweden",children:[],data:{}},
                              {id:"0026",name:"Switzerland",children:[],data:{}},
                              {id:"0027",name:"Ukraine",children:[],data:{}},
                              {id:"0028",name:"United Kingdom",children:[],data:{}},
                              {id:"0029",name:"United States of America",children:[],data:{}},],
                    data:{}
                  },
                  {
                    id: "01",
                    name: "Habits1",
                    children: [{id:"010",name:"Cameroon",children:[],data:{}},
                              {id:"011",name:"Ethiopia",children:[],data:{}},
                              {id:"012",name:"Ghana",children:[],data:{}},
                              {id:"013",name:"Kenya",children:[],data:{}},
                              {id:"014",name:"Liberia",children:[],data:{}},
                              {id:"015",name:"Malawi",children:[],data:{}},
                              {id:"016",name:"Nigeria",children:[],data:{}},
                              {id:"017",name:"Paraguay",children:[],data:{}},
                              {id:"018",name:"Tanzania",children:[],data:{}},],
                    data:{}
                  },
                  {
                    id: "02",
                    name: "Habits2",
                    children: [{id:"020",name:"Bangladesh",children:[],data:{}},
                              {id:"021",name:"China",children:[],data:{}},
                              {id:"022",name:"India",children:[],data:{}},
                              {id:"023",name:"Indonesia",children:[],data:{}},
                              {id:"024",name:"Madagascar",children:[],data:{}},
                              {id:"025",name:"Philippines",children:[],data:{}},
                              {id:"026",name:"Senegal",children:[],data:{}},
                              {id:"027",name:"Sierra Leone",children:[],data:{}},
                              {id:"028",name:"Sri Lanka",children:[],data:{}},
                              {id:"029",name:"Thailand",children:[],data:{}},],
                    data:{}
                  },
                  {
                    id: "03",
                    name: "Habits3",
                    children: [{id:"030",name:"Egypt",children:[],data:{}},
                              {id:"031",name:"Iran, Islamic Republic of",children:[],data:{}},
                              {id:"032",name:"Lesotho",children:[],data:{}},
                              {id:"033",name:"Morocco",children:[],data:{}},
                              {id:"034",name:"Romania",children:[],data:{}},
                              {id:"035",name:"Tunisia",children:[],data:{}},
                              {id:"036",name:"Turkey",children:[],data:{}},],
                    data:{}
                  },
                  {
                    id: "04",
                    name: "Habits4",
                    children: [{id:"040",name:"Albania",children:[],data:{}},
                              {id:"041",name:"Argentina",children:[],data:{}},
                              {id:"042",name:"Belarus",children:[],data:{}},
                              {id:"043",name:"Bosnia and Herzegovina",children:[],data:{}},
                              {id:"044",name:"Bulgaria",children:[],data:{}},
                              {id:"045",name:"Georgia",children:[],data:{}},
                              {id:"046",name:"Mongolia",children:[],data:{}},
                              {id:"047",name:"Pakistan",children:[],data:{}},
                              {id:"048",name:"Uzbekistan",children:[],data:{}},],
                    data:{}
                  },
                  {
                    id: "05",
                    name: "Habits5",
                    children: [{id:"050",name:"Brazil",children:[],data:{}},
                              {id:"051",name:"Costa Rica",children:[],data:{}},
                              {id:"052",name:"Fiji",children:[],data:{}},
                              {id:"053",name:"Jamaica",children:[],data:{}},
                              {id:"054",name:"Malaysia",children:[],data:{}},
                              {id:"055",name:"Mauritius",children:[],data:{}},
                              {id:"056",name:"Mexico",children:[],data:{}},
                              {id:"057",name:"Saudi Arabia",children:[],data:{}},
                              {id:"058",name:"South Africa",children:[],data:{}},
                              {id:"059",name:"Trinidad and Tobago",children:[],data:{}},
                              {id:"0510",name:"United Arab Emirates",children:[],data:{}},],
                    data:{}
                  },
                  {
                    id: "06",
                    name: "Habits6",
                    children: [{id:"060",name:"Bolivia",children:[],data:{}},
                              {id:"061",name:"Colombia",children:[],data:{}},
                              {id:"062",name:"Dominican Republic",children:[],data:{}},
                              {id:"063",name:"Ecuador",children:[],data:{}},
                              {id:"064",name:"Gambia",children:[],data:{}},
                              {id:"065",name:"Guatemala",children:[],data:{}},
                              {id:"066",name:"Haiti",children:[],data:{}},
                              {id:"067",name:"Japan",children:[],data:{}},
                              {id:"068",name:"Peru",children:[],data:{}},
                              {id:"069",name:"Samoa",children:[],data:{}},],
                    data:{}
                  },
        ],
        data:{}
    };
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#555'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#ddeeff'
        },
        
        Edge: {
          color: '#C17878',
          lineWidth:1.5
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id, {
                    onComplete: function() {
                        Log.write("done");
                    }
                });
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth <= 1) {
                style.fontSize = "0.8em";
                style.color = "#ccc";
            
            } else if(node._depth == 2){
                style.fontSize = "0.7em";
                style.color = "#494949";
            
            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
