const headers = React.createElement("h1",{id:"dsfckm"},"wassup");          // first is for for the tag, 2nd is for attributes(i.e class,id), 3rd for the children inside it 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);

/*
suppose we want to make a structure like 
<div id= "parent">
    <div id= "child">
    <h1>hallo1<h1>
     </div>

    <div id="child2">
     <h2>hallo2<h2>
     </div>
</div>
*/
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("div",{},"hallo1")
    ]),
     React.createElement("div",{id:"child2"},[
        React.createElement("div",{},"hallo2")
    ])
])