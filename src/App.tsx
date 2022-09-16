import React from "react";
import "./App.css";
import Drawer from "./lib/app";

function App() {
  const editor = new Drawer({ width: 1000, height: 1000 });

  return (
    <div className="App">
      <ul>
        <li onClick={() => (editor.setStrokeStyle = "red")}>red</li>
        <li onClick={() => (editor.setStrokeStyle = "blue")}>blue</li>
        <li onClick={() => (editor.setStrokeStyle = "green")}>green</li>
        <li onClick={() => (editor.setStrokeStyle = "black")}>black</li>
      </ul>
      <ul>
        <li onClick={() => (editor.setLineWidth = 1)}>1</li>
        <li onClick={() => (editor.setLineWidth = 2)}>2</li>
        <li onClick={() => (editor.setLineWidth = 3)}>3</li>
        <li onClick={() => (editor.setLineWidth = 4)}>4</li>
      </ul>
    </div>
  );
}

export default App;
