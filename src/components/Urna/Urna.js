import React, { Component } from 'react';

import styles from './Urna.module.css';

class Urna extends Component {
  state = {};

  render() {
    const { candidatos } = this.props;
    return (
      <div className={styles.Urna}>
        {candidatos.map(candidato => (
          <div className={styles.UrnaTela}>
            <div className={styles.Entrada}>
              <p>SEU VOTO PARA:</p>
              <h2>PRESIDENTE</h2>
              <div className={styles.Digitos}>
                <p>Número:</p>
                <div className={styles.Digito}>
                  <input type="text" maxLength="1" />
                </div>
                <div className={styles.Digito}>
                  <input type="text" maxLength="1" />
                </div>
              </div>
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
                <img alt="foto" src={candidato.imagem} />
                <img alt="foto" src={candidato.imagemVice} />
              </div>
            </div>
          </div>
        ))}
        <div className={styles.UrnaTeclado}>
          <div
            style={{ background: '#f5f5f5', width: '100%', height: '80px' }}
          />
          <div className={styles.Teclas} />
        </div>
      </div>
    );
  }
}

export default Urna;
