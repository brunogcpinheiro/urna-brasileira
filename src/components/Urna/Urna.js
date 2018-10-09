import React, { Component } from "react";

import styles from "./Urna.module.css";

class Urna extends Component {
  state = {
    primeiroNumero: "",
    segundoNumero: "",
    finalNumero: ""
  };

  handleResultTemp = () => {
    const final = this.state.primeiroNumero + this.state.segundoNumero;
    this.setState({ finalNumero: final });
  };

  handleNumber1 = query => {
    this.setState({
      primeiroNumero: query
    });
  };

  handleNumber2 = query => {
    this.setState({
      segundoNumero: query
    });
  };

  render() {
    const { primeiroNumero, segundoNumero, finalNumero } = this.state;
    const { candidatos } = this.props;

    return (
      <div className={styles.Urna}>
        {candidatos.map(candidato => (
          <div className={styles.UrnaTela} key={candidato.id}>
            <div className={styles.Entrada}>
              <p>SEU VOTO PARA:</p>
              <h2>PRESIDENTE</h2>
              <form className={styles.Digitos}>
                <p>Número:</p>
                <div className={styles.Digito}>
                  <input
                    type="text"
                    maxLength="1"
                    value={primeiroNumero}
                    onChange={e =>
                      this.setState({ primeiroNumero: e.target.value })
                    }
                  />
                </div>
                <div className={styles.Digito}>
                  <input
                    type="text"
                    maxLength="1"
                    value={segundoNumero}
                    onChange={e =>
                      this.setState({ segundoNumero: e.target.value })
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
            style={{
              background: "#f5f5f5",
              width: "100%",
              height: "80px"
            }}
          >
            <br />
            <i>Desenvolvido por Bruno Carpinelli</i>
          </div>
          <div className={styles.Teclas}>
            <button
              className={styles.Numeros}
              onClick={e => this.handleNumber1("1")}
            >
              1
            </button>
            <button className={styles.Numeros}>2</button>
            <button className={styles.Numeros}>3</button>
            <button className={styles.Numeros}>4</button>
            <button className={styles.Numeros}>5</button>
            <button className={styles.Numeros}>6</button>
            <button
              className={styles.Numeros}
              onClick={e => this.handleNumber2("7")}
            >
              7
            </button>
            <button className={styles.Numeros}>8</button>
            <button className={styles.Numeros}>9</button>
            <button className={styles.Numeros}>0</button>
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
