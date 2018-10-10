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
        id: "16",
        nome: "Vera Lúcia",
        partido: "PSTU",
        vice: "Hertz",
        imagem:
          "https://f.i.uol.com.br/fotografia/2018/07/20/15321280795b526b4f507d0_1532128079_3x2_md.jpg",
        imagemVice:
          "https://abrilveja.files.wordpress.com/2018/09/hertz-da-conceiccca7acc83o-dias.jpg?quality=70&strip=info&strip=info"
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
        vice: "Paulo Rabello",
        imagem:
          "https://abrilveja.files.wordpress.com/2017/05/alvaro-dias-foto-george-gianni-psdb-7.jpg",
        imagemVice:
          "https://upload.wikimedia.org/wikipedia/commons/4/40/Paulo_Rabello_de_Castro.png"
      },
      {
        id: "27",
        nome: "Eymael",
        partido: "DC",
        vice: "Helvio Costa",
        imagem:
          "https://midia.gruposinos.com.br/_midias/jpg/2014/06/29/eymael-268098.jpg",
        imagemVice:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4y3Y2TMytH7EN-hbbCGDfCAYdWNBJbzNvoK9yAvyjkxvW0HN"
      },
      {
        id: "30",
        nome: "João Amoêdo",
        partido: "NOVO",
        vice: "Professor Christian",
        imagem:
          "http://s2.glbimg.com/ENTrzG-Drhy819t_DUCGAliBmIU=/0x67:1333x1425/1333x1358/s.glbimg.com/jo/g1/f/original/2018/08/07/presidencia_joao_amoedo_G2myNTg.jpg",
        imagemVice:
          "https://s3.amazonaws.com/gp-info-eleicoes/fotos/brasil/vice-presidente/professor-christian.jpg"
      },
      {
        id: "45",
        nome: "Geraldo Alckmin",
        partido: "PSDB",
        vice: "Ana Amélia",
        imagem:
          "http://ogazeteiro.com.br/wp-content/uploads/2017/11/geraldo.001.png",
        imagemVice:
          "http://assets.votenaweb.com.br/politicians/avatars/927/large/Ana-Am%C3%A9lia.png?1373050070"
      },
      {
        id: "50",
        nome: "Guilherme Boulos",
        partido: "PSOL",
        vice: "Sonia Guajajara",
        imagem:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCwNGfG4pgHBU8MgBmDb_bLOVkRB8e_pbcd9jFMTe-ZtDwv1J",
        imagemVice: "http://midianinja.org/files/2017/04/sonia.png"
      },
      {
        id: "51",
        nome: "Cabo Daciolo",
        partido: "PATRI",
        vice: "Professora Suelene Balduino",
        imagem:
          "https://www.otempo.com.br/image/contentid/policy:1.2011734:1533872243/daciolo22.png?f=3x2&q=0.6&$p$f$q=5a6ca39",
        imagemVice:
          "http://s2.glbimg.com/x6XyYO-5DcSt0FE7s8DKJG60W90=/0x0:1158x1193/1158x1193/s.glbimg.com/jo/g1/f/original/2018/08/14/vicepresidencia_suelene_balduino.jpg"
      },
      {
        id: "54",
        nome: "João Goulart Filho",
        partido: "PPL",
        vice: "Léo da Silva Alves",
        imagem:
          "http://s2.glbimg.com/5mWJu80OuRv3H8tblYL8X0gzbIM=/0x0:599x663/599x663/s.glbimg.com/jo/g1/f/original/2018/08/07/presidencia_joao_goulart.jpg",
        imagemVice:
          "http://accionart.com.br/PPL/wp-content/uploads/2017/11/LeoAlves.jpg"
      },
      {
        id: "nulo",
        nome: "",
        partido: "",
        vice: "",
        imagem:
          "http://4.bp.blogspot.com/-PnLQ9kOK02E/UDMufM9rGuI/AAAAAAAAAak/ZxT5uNfw034/s1600/nulo.png",
        imagemVice:
          "http://4.bp.blogspot.com/-PnLQ9kOK02E/UDMufM9rGuI/AAAAAAAAAak/ZxT5uNfw034/s1600/nulo.png"
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
    const { candidatos, fake, nulo } = this.state;

    return (
      <div className={styles.App}>
        <h1>
          Urna Brasileira para <span>Leigos</span>
        </h1>
        <Urna candidatos={candidatos} fake={fake} nulo={nulo} />
      </div>
    );
  }
}

export default App;
