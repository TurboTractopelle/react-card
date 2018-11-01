import React from "react";
import ReactDOM from "react-dom";
import SocialCard from "./components/SocialCard";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SocialCard data={store} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
