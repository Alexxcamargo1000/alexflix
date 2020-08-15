import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import VideosRepository from '../../../repositories/videos';
import CategoryRepository from '../../../repositories/categorias';

// import { Container } from './styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categotyTitles = categorias.map(({ titulo }) => titulo);

  const { hendleChange, values } = useForm({
    titulo: 'padrao',
    url: 'https://www.youtube.com/watch?v=17PRuk2j2Ek',
    descricao: 'sou a descrição',
    categoria: 'Filmes da DC',
  });

  useEffect(() => {
    CategoryRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        console.log(categoriaEscolhida);

        VideosRepository.create({
          titulo: values.titulo,
          url: values.url,
          descricao: values.descricao,
          categoriaId: 1,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('foi');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={hendleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={hendleChange}
        />
        <FormField
          label="Discrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={hendleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          suggestions={categotyTitles}
          value={values.categoria}
          onChange={hendleChange}
        />
        <Button type="submit">
          cadastrar categoria
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
