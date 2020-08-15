import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

// import { Container } from './styles';


function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };
  const { hendleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://heroflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  },
  []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da categoria"
          name="titulo"
          type="text"
          value={values.titulo}
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

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (

          <li key={`${categoria.titulo}`}>

            {categoria.titulo}

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
