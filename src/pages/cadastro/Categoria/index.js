import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// import { Container } from './styles';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function hendleChange(info) {
    setValue(info.target.getAttribute('name'), info.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3001/categoria'
      : 'https://heroflix.herokuapp.com/categoria';

    fetch(URL)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([
          ...resposta,
        ]);
      });
  });
  // useEffect(() => {
  //   if (window.location.href.includes('localhost')) {
  //     const URL = 'http://localhost:3001/categoria';
  //     fetch(URL)
  //       .then(async (respostaDoServer) => {
  //         if (respostaDoServer.ok) {
  //           const resposta = await respostaDoServer.json();
  //           setCategorias([
  //             ...resposta,
  //           ]);
  //           return;
  //         }
  //         throw new Error('Não foi possível pegar os dados');
  //       });
  //   }
  // }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={hendleChange}
        />

        <FormField
          label="descricao"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={hendleChange}
        />

        <FormField
          label="cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={hendleChange}
        />

        {/* <div>
        <label>
          cor:
          <input
            type="color"
            value={values.cor}
            name="cor"
            onChange={hendleChange}
          />
        </label>
        </div> */}
        {/*
        {categorias.length === 0(
          <div>
            loading..
          </div>,
        )} */}

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (

          <li key={`${categoria}${indice}`}>

            {categoria.nome}

          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
