import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} targte="_blank">
        Listen
      </a>

      <span className="phoneticsText"> {props.phonetics.text} </span>
    </div>
  );
}
