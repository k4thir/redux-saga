import React from "react";

import Profile from "./Profile";
import "./styles.css"

function App(props) {
  return (
    <div>
      <h1 className="App">
        Today's Headlines
      </h1>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
