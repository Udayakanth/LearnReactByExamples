import React, { Fragment , useState} from "react";

function NameTag(props) {
  // return <h1> {props.name</h1>
  // return <h1> {props.children}</h1>
  const [age, setAge] = useState(20)
  return (
    <Fragment>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <h1> age = {age}</h1>
   
    </Fragment>
  );
}

export default NameTag;
