import React, { Component } from "react";
import Urna from "./components/Urna/Urna";

import styles from "./App.module.css";

class App extends Component {
  state = {
    candidatos: [
      {
        id: "12",
        nome: "Ciro Gomes",
        partido: "PDT",
        vice: "Kátia Abreu",
        imagem:
          "http://s2.glbimg.com/ybjJgeoaW6b4wkTDbgWzuKEKdD8=/114x0:1885x1685/1771x1685/s.glbimg.com/jo/g1/f/original/2018/08/09/presidencia_ciro_gomes_XplMGTn.jpg",
        imagemVice:
          "https://cdn.destakjornal.com.br/images/2018-10/img_797x448$2018_10_03_10_25_08_32641.jpg"
      },
      {
        id: "13",
        nome: "Fernando Haddad",
        partido: "PT",
        vice: "Manuela D'Ávila",
        imagem:
          "https://www.cartacapital.com.br/revista/1020/fernando-haddad-vamos-retomar-o-projeto-de-Lula/Fernando%20Haddad.jpg/@@images/b1362c58-14b0-4bb9-b21b-67bc0ff74b24.jpeg",
        imagemVice:
          "https://abrilveja.files.wordpress.com/2018/06/brasil-politica-debete-pre-candidatos-brasilia-20180606-0001-copy.jpg"
      },
      {
        id: "15",
        nome: "Henrique Meirelles",
        partido: "MDB",
        vice: "Germano Rigotto",
        imagem:
          "https://www.henriquemeirelles.com.br/wp-content/themes/henrique-meirelles/img/p-home-henrique-meirelles.png",
        imagemVice:
          "http://www.edgarlisboa.com.br/wp-content/uploads/2015/04/Germano-Rigotto-nova-foto.png"
      },
      {
        id: "17",
        nome: "Jair Messias Bolsonaro",
        partido: "PSL",
        vice: "General Hamilton Mourão",
        imagem:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNai_ski7BCALwuUflTtzVDMqNDrQ0ivskjqV2qIGxYeuLf1SQg",
        imagemVice:
          "https://static.congressoemfoco.uol.com.br/2018/10/general-hamilton-mourao-pedro-ribas-anpr.jpeg"
      },
      {
        id: "18",
        nome: "Marina Silva",
        partido: "REDE",
        vice: "Eduardo Jorge",
        imagem:
          "http://s2.glbimg.com/H6Gde71T1DAh0TXlI3ZM19VeVag=/0x0:300x225/300x225/s.glbimg.com/jo/g1/f/original/2014/08/21/marina.jpg",
        imagemVice:
          "http://s2.glbimg.com/zdmRFwPAhQBLwspDI_qgj6kl-_I=/0x0:300x225/300x225/s.glbimg.com/jo/g1/f/original/2014/06/12/eduardojorge.jpg"
      },
      {
        id: "19",
        nome: "Álvaro Dias",
        partido: "PODEMOS",
        vice: "Eduardo Jorge",
        imagem:
          "https://abrilveja.files.wordpress.com/2017/05/alvaro-dias-foto-george-gianni-psdb-7.jpg",
        imagemVice:
          "http://s2.glbimg.com/zdmRFwPAhQBLwspDI_qgj6kl-_I=/0x0:300x225/300x225/s.glbimg.com/jo/g1/f/original/2014/06/12/eduardojorge.jpg"
      }
    ],
    fake: [
      {
        id: "candidato fake",
        nome: "",
        partido: "",
        vice: "",
        imagem:
          "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=",
        imagemVice:
          "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0="
      }
    ]
  };

  render() {
    const { candidatos, fake } = this.state;

    return (
      <div className={styles.App}>
        <h1>
          Urna Brasileira para <span>Leigos</span>
        </h1>
        <Urna candidatos={candidatos} fake={fake} />
      </div>
    );
  }
}

export default App;
