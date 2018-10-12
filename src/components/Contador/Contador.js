import React from "react";
import styles from "./Contador.module.css";

const Contador = props => {
  return (
    <div className={styles.Contador}>
      <h1>Contador</h1>
      <ul>
        <li>
          <span>Ciro Gomes.: </span>
          <span>{props.ciro}</span>
        </li>
        <li>
          <span>Fernando Haddad.: </span>
          <span>{props.haddad}</span>
        </li>
        <li>
          <span>Henrique Meirelles.: </span>
          <span>{props.meirelles}</span>
        </li>
        <li>
          <span>Vera Lúcia.: </span>
          <span>{props.vera}</span>
        </li>
        <li>
          <span>Jair Bolsonaro.: </span>
          <span>{props.bolsonaro}</span>
        </li>
        <li>
          <span>Marina Silva.: </span>
          <span>{props.marina}</span>
        </li>
        <li>
          <span>Álvaro Dias.: </span>
          <span>{props.alvaro}</span>
        </li>
        <li>
          <span>Eymael.: </span>
          <span>{props.eymael}</span>
        </li>
        <li>
          <span>João Amôedo.: </span>
          <span>{props.amoedo}</span>
        </li>
        <li>
          <span>Geraldo Alckmin.: </span>
          <span>{props.alckmin}</span>
        </li>
        <li>
          <span>Boulos.: </span>
          <span>{props.boulos}</span>
        </li>
        <li>
          <span>Daciolo.: </span>
          <span>{props.daciolo}</span>
        </li>
        <li>
          <span>João Goulart.: </span>
          <span>{props.goulart}</span>
        </li>
        <li>
          <span>Nulo.: </span>
          <span>{props.nulo}</span>
        </li>
        <li>
          <span>Branco.: </span>
          <span>{props.branco}</span>
        </li>
      </ul>
    </div>
  );
};

export default Contador;
