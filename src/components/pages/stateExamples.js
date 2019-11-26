import React from "react";
import A_stateString from "../stateExamples/stringToState";
import ObjectToState from "../stateExamples/objectToState";
import ObjectsWithTextArrayToState from "../stateExamples/objectsWithTextArrayToState"
import ObjectsWithObjectArray from "../stateExamples/ObjectWithObjectArrays";
import ObjectsWithObjectArray2 from "../stateExamples/ObjectWithObjectArray2";
import ObjectsWithObjectArray3 from "../stateExamples/ObjectWithObjectArray3";
import ObjectsWithObjectArray4 from "../stateExamples/objectWithObjectArray4";



const StateExamples = () => {
  return (
    <div>
      <A_stateString/>
      <ObjectToState/>
      <ObjectsWithTextArrayToState/>
      <ObjectsWithObjectArray/>
      <ObjectsWithObjectArray2/>
     <ObjectsWithObjectArray3/>
     <ObjectsWithObjectArray4/>
    </div>


  );
};

export default StateExamples;
