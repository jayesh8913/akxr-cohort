
import './App.css'

// the usual way to using react way wayy too junky(too many lines of code for a single state), therefore jsx was created , jsx is not react it is a html like syntax in js
//b4, react.createElememt=> react element - js obj => html element 
// in jsx , the jsx file is transfiled to  react.createElememt=> react element - js obj => html element and the conversion of jsx to react.createelement is done by babe

// this is a functional component 
const Title=()=>{
  return(<h2>hallo</h2>)
}

// always start component with a capital letter  
const Heading=()=>{
return (<div>
  <Title/>
  <h1>supp</h1>


</div>)

}
  
export default Heading
