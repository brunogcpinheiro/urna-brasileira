import React, { Component } from "react";

import styles from "./Urna.module.css";

class Urna extends Component {
  state = {
    firstNumber: "",
    secondNumber: "",
    finalNumber: ""
  };

  handleResultTemp = () => {
    const final = this.state.firstNumber + this.state.secondNumber;
    this.setState({ finalNumber: final });
  };

  render() {
    const { candidatos } = this.props;

    return (
      <div className={styles.Urna}>
        {candidatos.map(candidato => (
          <div className={styles.UrnaTela}>
            <div className={styles.Entrada}>
              <p>SEU VOTO PARA:</p>
              <h2>PRESIDENTE</h2>
              <form className={styles.Digitos}>
                <p>Número:</p>
                <div className={styles.Digito}>
                  <input
                    type="text"
                    maxLength="1"
                    onChange={e =>
                      this.setState({ firstNumber: e.target.value })
                    }
                  />
                </div>
                <div className={styles.Digito}>
                  <input
                    type="text"
                    maxLength="1"
                    onChange={e =>
                      this.setState({ secondNumber: e.target.value })
                    }
                  />
                </div>
              </form>
              <div className={styles.Dados}>
                <div>
                  <p>
                    Nome: <strong>{candidato.nome}</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Partido: <strong>{candidato.partido}</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Vice-presidente: <strong>{candidato.vice}</strong>
                  </p>
                </div>
              </div>
              <div className={styles.Instrucoes}>
                <p>
                  Para CONFIRMAR este voto tecle <strong>CONFIRMA</strong>.
                </p>
                <p>
                  Para REINICIAR este voto tecle <strong>CORRIGE</strong>.
                </p>
              </div>
            </div>
            <div className={styles.Informacoes}>
              <div className={styles.Candidato}>
                <img alt={candidato.nome} src={candidato.imagem} />
                <img alt={candidato.vice} src={candidato.imagemVice} />
              </div>
            </div>
          </div>
        ))}
        <div className={styles.UrnaTeclado}>
          <div
            style={{ background: "#f5f5f5", width: "100%", height: "80px" }}
          />
          <div className={styles.Teclas}>
            <button onClick={this.handleResultTemp}>0</button>
            <button onClick={this.handleResultTemp}>1</button>
            <button onClick={this.handleResultTemp}>2</button>
            <button onClick={this.handleResultTemp}>3</button>
            <button onClick={this.handleResultTemp}>4</button>
            <button onClick={this.handleResultTemp}>5</button>
            <button onClick={this.handleResultTemp}>6</button>
            <button onClick={this.handleResultTemp}>7</button>
            <button onClick={this.handleResultTemp}>8</button>
            <button onClick={this.handleResultTemp}>9</button>
          </div>
          <div className={styles.Acoes}>
            <button onClick={this.handleResultTemp} className={styles.Branco}>
              BRANCO
            </button>
            <button onClick={this.handleResultTemp} className={styles.Corrige}>
              CORRIGE
            </button>
            <button onClick={this.handleResultTemp} className={styles.Confirma}>
              CONFIRMA
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Urna;
