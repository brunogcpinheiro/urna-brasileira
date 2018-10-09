import React, { Component } from "react";

import styles from "./Urna.module.css";

class Urna extends Component {
  state = {};

  render() {
    return (
      <div className={styles.Urna}>
        <div className={styles.UrnaTela}>
          <h4>PRESIDENTE</h4>
          <div className={styles.Digitos}>
            <div className={styles.Digito}>
              <input type="text" maxLength="1" />
            </div>
            <div className={styles.Digito}>
              <input type="text" maxLength="1" />
            </div>
            <div className={styles.Candidato}>
              <img
                alt="foto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNai_ski7BCALwuUflTtzVDMqNDrQ0ivskjqV2qIGxYeuLf1SQg"
              />
            </div>
          </div>
        </div>
        <div className={styles.UrnaTeclado} />
      </div>
    );
  }
}

export default Urna;
