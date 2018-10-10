import React, { Component } from "react";

import styles from "./Urna.module.css";

class Urna extends Component {
  state = {
    primeiroNumero: "",
    segundoNumero: "",
    finalNumero: ""
  };

  handleResultTemp = () => {
    let final = this.state.primeiroNumero + this.state.segundoNumero;
    if (final) {
      this.setState({ finalNumero: final });
      console.log(final);
    }
  };

  handleNumber = query => {
    if (!this.state.primeiroNumero) {
      this.setState({
        primeiroNumero: query
      });
    } else {
      this.setState({
        segundoNumero: query
      });
    }
  };

  clearInputs = query => {
    this.setState({
      primeiroNumero: query,
      segundoNumero: query,
      finalNumero: query
    });
  };

  handleVotoBranco = () => {
    alert("Voto em branco");
  };

  render() {
    const { primeiroNumero, segundoNumero, finalNumero } = this.state;
    const { candidatos, fake } = this.props;

    const filtrado = candidatos.filter(c => c.id === finalNumero);
    const mostrarCandidatos = filtrado.length ? filtrado : fake;

    return (
      <div className={styles.Urna}>
        {mostrarCandidatos &&
          mostrarCandidatos.map(candidato => (
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
                  <img
                    alt={candidato.nome}
                    src={candidato ? candidato.imagem : semCandidato}
                  />
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
              name="1"
              onClick={e => this.handleNumber(e.target.name)}
            >
              1
            </button>
            <button
              className={styles.Numeros}
              name="2"
              onClick={e => this.handleNumber(e.target.name)}
            >
              2
            </button>
            <button
              className={styles.Numeros}
              name="3"
              onClick={e => this.handleNumber(e.target.name)}
            >
              3
            </button>
            <button
              className={styles.Numeros}
              name="4"
              onClick={e => this.handleNumber(e.target.name)}
            >
              4
            </button>
            <button
              className={styles.Numeros}
              name="5"
              onClick={e => this.handleNumber(e.target.name)}
            >
              5
            </button>
            <button
              className={styles.Numeros}
              name="6"
              onClick={e => this.handleNumber(e.target.name)}
            >
              6
            </button>
            <button
              className={styles.Numeros}
              name="7"
              onClick={e => this.handleNumber(e.target.name)}
            >
              7
            </button>
            <button
              className={styles.Numeros}
              name="8"
              onClick={e => this.handleNumber(e.target.name)}
            >
              8
            </button>
            <button
              className={styles.Numeros}
              name="9"
              onClick={e => this.handleNumber(e.target.name)}
            >
              9
            </button>
            <button
              className={styles.Numeros}
              name="0"
              onClick={e => this.handleNumber(e.target.name)}
            >
              0
            </button>
          </div>
          <div className={styles.Acoes}>
            <button onClick={this.handleVotoBranco} className={styles.Branco}>
              BRANCO
            </button>
            <button
              onClick={e => this.clearInputs("")}
              className={styles.Corrige}
            >
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
