import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <h2>{props.definition.word}</h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        {props.definition.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
