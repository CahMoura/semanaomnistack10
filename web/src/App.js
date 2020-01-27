import React, { useState, useEffect } from 'react';
import api from './Services/Api';

import './global.css';
import './App.css';
import './Saidebar.css';
import './main.css';

import DevForm from './Components/DevForm/index.js';
import DevItem from './Components/DevItem';

//3 conceitos principais do React: (Tudo é baseado nesses conceitos)
//Componente: É uma função que retorna algum conteúdo HTML, CSS, JavaScript. Um bloco isolado de HTML, CSS e JS, o qual não intedere no restante da aplicação(Timeline do Facebook, cada post é um componente) primeira letra sempre maíuscula., um por arquivo.
//Propriedade: No HTML chamamos de Atributos. Informações que o componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  const [devs, setDevs] = useState([]);

useEffect(() => {
  async function loadDevs() {
    const response = await api.get('./devs');

    setDevs(response.data);
  }

  loadDevs();
}, []);

async function handleAddDev(data) {
  const response = await api.post('./devs', data)

  setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
