import React, { Component } from 'react';
import Urna from './components/Urna/Urna';

import styles from './App.module.css';

class App extends Component {
  state = {
    candidatos: [
      {
        id: '17',
        nome: 'Jair Messias Bolsonaro',
        partido: 'PSL',
        vice: 'General Hamilton Mourão',
        imagem:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNai_ski7BCALwuUflTtzVDMqNDrQ0ivskjqV2qIGxYeuLf1SQg',
        imagemVice:
          'https://static.congressoemfoco.uol.com.br/2018/10/general-hamilton-mourao-pedro-ribas-anpr.jpeg'
      }
      // {
      //   id: '13',
      //   nome: 'Fernando Haddad',
      //   partido: 'PT',
      //   vice: "Manuela D'Ávila",
      //   imagem:
      //     'https://www.cartacapital.com.br/revista/1020/fernando-haddad-vamos-retomar-o-projeto-de-Lula/Fernando%20Haddad.jpg/@@images/b1362c58-14b0-4bb9-b21b-67bc0ff74b24.jpeg',
      //   imagemVice:
      //     'https://abrilveja.files.wordpress.com/2018/06/brasil-politica-debete-pre-candidatos-brasilia-20180606-0001-copy.jpg'
      // }
    ]
  };

  render() {
    const { candidatos } = this.state;

    return (
      <div className={styles.App}>
        <h1>
          Urna Brasileira para <span>Leigos</span>
        </h1>
        <Urna candidatos={candidatos} />
      </div>
    );
  }
}

export default App;
