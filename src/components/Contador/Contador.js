import React from "react";

const Contador = props => {
  return (
    <div>
      <h1>Contador</h1>
      <ul>
        <li>
          {props.candidato.map(c => <li>{c}</li>)}: {props.voto.Branco}
        </li>
      </ul>
    </div>
  );
};

export default Contador;
