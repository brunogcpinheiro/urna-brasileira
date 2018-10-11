import React, { Component } from 'react';

import styles from './Urna.module.css';

class Urna extends Component {
  state = {
    primeiroNumero: '',
    segundoNumero: '',
    finalNumero: ''
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
    this.handleFinish();
  };

  handleFinish = () => {
    this.setState(state => ({
      finalNumero: state.primeiroNumero + state.segundoNumero
    }));
  };

  handleResultTemp = () => {
    let final = this.state.finalNumero;
    if (
      (final && final === '12') ||
      final === '13' ||
      final === '15' ||
      final === '16' ||
      final === '17' ||
      final === '18' ||
      final === '19' ||
      final === '27' ||
      final === '30' ||
      final === '45' ||
      final === '50' ||
      final === '51' ||
      final === '54'
    ) {
      this.setState({ finalNumero: final });
    } else {
      final = 'nulo';
      this.setState({ finalNumero: final });
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
    alert('Voto em branco');
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
                    <input type="text" maxLength="1" value={primeiroNumero} />
                  </div>
                  <div className={styles.Digito}>
                    <input type="text" maxLength="1" value={segundoNumero} />
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
              background: '#f5f5f5',
              width: '100%',
              height: '80px'
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
              onClick={e => this.clearInputs('')}
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
