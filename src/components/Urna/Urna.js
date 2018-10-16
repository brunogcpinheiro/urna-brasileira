import React, { Component, Fragment } from "react";
import Contador from "../Contador/Contador";

import styles from "./Urna.module.css";

class Urna extends Component {
  state = {
    primeiroNumero: "",
    segundoNumero: "",
    finalNumero: "",
    ciro: 0,
    haddad: 0,
    meirelles: 0,
    vera: 0,
    bolsonaro: 0,
    marina: 0,
    alvaro: 0,
    eymael: 0,
    amoedo: 0,
    alckmin: 0,
    boulos: 0,
    daciolo: 0,
    goulart: 0,
    nulo: 0,
    branco: 0
  };

  handleNumber = e => {
    if (!this.state.primeiroNumero) {
      this.setState({
        primeiroNumero: e.target.name
      });
    } else {
      this.setState({
        segundoNumero: e.target.name
      });
    }

    this.setState(state => ({
      finalNumero: state.primeiroNumero + state.segundoNumero
    }));

    this.handleResult();
  };

  handleResult = () => {
    let final = this.state.finalNumero;

    if (
      (final.length !== 0 && final === "12") ||
      final === "13" ||
      final === "15" ||
      final === "16" ||
      final === "17" ||
      final === "18" ||
      final === "19" ||
      final === "27" ||
      final === "30" ||
      final === "45" ||
      final === "50" ||
      final === "51" ||
      final === "54"
    ) {
      this.setState(state => ({ finalNumero: final }));
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
    this.setState(state => ({
      branco: state.branco + 1
    }));
  };

  handleFinishResult = () => {
    const final = this.state.finalNumero;

    switch (final) {
      case "12":
        this.setState(state => ({
          ciro: state.ciro + 1
        }));
        break;
      case "13":
        this.setState(state => ({
          haddad: state.haddad + 1
        }));
        break;
      case "15":
        this.setState(state => ({
          meirelles: state.meirelles + 1
        }));
        break;
      case "16":
        this.setState(state => ({
          vera: state.vera + 1
        }));
        break;
      case "17":
        this.setState(state => ({
          bolsonaro: state.bolsonaro + 1
        }));
        break;
      case "18":
        this.setState(state => ({
          marina: state.marina + 1
        }));
        break;
      case "19":
        this.setState(state => ({
          alvaro: state.alvaro + 1
        }));
        break;
      case "27":
        this.setState(state => ({
          eymael: state.eymael + 1
        }));
        break;
      case "30":
        this.setState(state => ({
          amoedo: state.amoedo + 1
        }));
        break;
      case "45":
        this.setState(state => ({
          alckmin: state.alckmin + 1
        }));
        break;
      case "50":
        this.setState(state => ({
          boulos: state.boulos + 1
        }));
        break;
      case "51":
        this.setState(state => ({
          daciolo: state.daciolo + 1
        }));
        break;
      case "54":
        this.setState(state => ({
          goulart: state.goulart + 1
        }));
        break;
      case "nulo":
        this.setState(state => ({
          nulo: state.nulo + 1
        }));
        break;
      default:
        break;
    }

    this.setState({
      primeiroNumero: "",
      segundoNumero: "",
      finalNumero: ""
    });
  };

  render() {
    const {
      primeiroNumero,
      segundoNumero,
      finalNumero,
      ciro,
      haddad,
      meirelles,
      vera,
      bolsonaro,
      marina,
      alvaro,
      eymael,
      amoedo,
      alckmin,
      boulos,
      daciolo,
      goulart,
      nulo,
      branco
    } = this.state;
    const { candidatos, fake } = this.props;

    const filtrado = candidatos.filter(c => c.id === finalNumero);
    const mostrarCandidatos = filtrado.length ? filtrado : fake;

    return (
      <Fragment>
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
                        defaultValue={primeiroNumero}
                      />
                    </div>
                    <div className={styles.Digito}>
                      <input
                        type="text"
                        maxLength="1"
                        defaultValue={segundoNumero}
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
                name="1"
                onClick={this.handleNumber}
              >
                1
              </button>
              <button
                className={styles.Numeros}
                name="2"
                onClick={this.handleNumber}
              >
                2
              </button>
              <button
                className={styles.Numeros}
                name="3"
                onClick={this.handleNumber}
              >
                3
              </button>
              <button
                className={styles.Numeros}
                name="4"
                onClick={this.handleNumber}
              >
                4
              </button>
              <button
                className={styles.Numeros}
                name="5"
                onClick={this.handleNumber}
              >
                5
              </button>
              <button
                className={styles.Numeros}
                name="6"
                onClick={this.handleNumber}
              >
                6
              </button>
              <button
                className={styles.Numeros}
                name="7"
                onClick={this.handleNumber}
              >
                7
              </button>
              <button
                className={styles.Numeros}
                name="8"
                onClick={this.handleNumber}
              >
                8
              </button>
              <button
                className={styles.Numeros}
                name="9"
                onClick={this.handleNumber}
              >
                9
              </button>
              <button
                className={styles.Numeros}
                name="0"
                onClick={this.handleNumber}
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
              <button
                onClick={this.handleFinishResult}
                className={styles.Confirma}
              >
                CONFIRMA
              </button>
            </div>
          </div>
        </div>
        <Contador
          ciro={ciro}
          haddad={haddad}
          meirelles={meirelles}
          vera={vera}
          bolsonaro={bolsonaro}
          marina={marina}
          alvaro={alvaro}
          eymael={eymael}
          amoedo={amoedo}
          alckmin={alckmin}
          boulos={boulos}
          daciolo={daciolo}
          goulart={goulart}
          nulo={nulo}
          branco={branco}
        />
      </Fragment>
    );
  }
}

export default Urna;
