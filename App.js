import  React,{Fragment, useState} from "react"
const initialState = [{a : 1, b: 2, c:3}]
function App() {
    const [alphaNum, setAlphaNum] = useState(initialState) 
    let alphaSet = alphaNum[0]
    const [editable,setEditable] = useState(false)

    function editTextValue() {
      //alert('test')
      console.log('double click....')
      setEditable(true)  
    }
    let text = 'Edited Text'
    return <Fragment>
        {editable ? (<input type="text" defaultValue="ReactJS Input"/>) : <h2 onDoubleClick={editTextValue}>test</h2> }
        <h2> {alphaSet.a} </h2>
        <h2> {alphaSet.b} </h2>
        <h2> {alphaSet.c} </h2>
    </Fragment>
    
}
export default App