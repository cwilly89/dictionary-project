import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetics.audio} targte="_blank">
        Listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
