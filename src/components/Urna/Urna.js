import React, { Component } from 'react';

import styles from './Urna.module.css';

class Urna extends Component {
  state = {};

  render() {
    return (
      <div className={styles.Urna}>
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
                  Nome: <strong>Jair Messias Bolsonaro</strong>
                </p>
              </div>
              <div>
                <p>
                  Partido: <strong>PSL</strong>
                </p>
              </div>
              <div>
                <p>
                  Vice-presidente: <strong>General Hamilton Mourão</strong>
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
                alt="foto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNai_ski7BCALwuUflTtzVDMqNDrQ0ivskjqV2qIGxYeuLf1SQg"
              />
              <img
                alt="foto"
                src="https://static.congressoemfoco.uol.com.br/2018/10/general-hamilton-mourao-pedro-ribas-anpr.jpeg"
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
