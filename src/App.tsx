import React from "react";
import "./App.css";
import Toolbar from "./component/Toolbar";
import { Drawer } from "./lib";

function App() {
  const editor = new Drawer({ width: 1280, height: 720 });

  return (
    <div className="App">
      <Toolbar editor={editor} />
    </div>
  );
}

export default App;
