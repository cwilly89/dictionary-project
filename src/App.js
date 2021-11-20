import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="Salutations" />
        <footer>
          Coded by Channell Mascaro. Project is hosted on{" "}
          <a href="https://pensive-lichterman-1b7aba.netlify.app"> Netlify</a>{" "}
          and open-source on{" "}
          <a href="https://github.com/cwilly89/dictionary-project">GitHub </a>
        </footer>
      </div>
    </div>
  );
}
