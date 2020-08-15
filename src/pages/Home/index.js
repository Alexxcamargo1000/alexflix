import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';
import catagoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  const Random = function (max) {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    catagoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (

    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (
        <Loading>Loading...</Loading>
      )}

      {dadosIniciais.length > 0 }
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          const randomCategoria = Random(dadosIniciais.length);
          const randomVideo = Random(dadosIniciais[randomCategoria].videos.length);
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[randomCategoria].videos[randomVideo].titulo}
                url={dadosIniciais[randomCategoria].videos[randomVideo].url}
                videoDescription={dadosIniciais[randomCategoria].videos[randomVideo].descricao}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[5].videos[23].titulo}
        url={dadosIniciais.categorias[5].videos[23].url}
       // eslint-disable-next-line max-len
       videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      /> */}
      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[randomCategoria].videos[randomVideo].titulo}
        url={dadosIniciais.categorias[randomCategoria].videos[randomVideo].url}
        videoDescription={dadosIniciais.categorias[randomCategoria].videos[randomVideo].descricao}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

    </PageDefault>
  );
}

export default Home;
