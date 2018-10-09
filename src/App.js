import React, { Component } from "react";
import Urna from "./components/Urna/Urna";

import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>
          Urna Brasileira para <span>Leigos</span>
        </h1>
        <Urna />
      </div>
    );
  }
}

export default App;
