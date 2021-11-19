import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="Salutations" />
        <footer>Coded by Channell Mascaro</footer>
      </div>
    </div>
  );
}
