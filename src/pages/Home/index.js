import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
const Random = function(max){
  return Math.floor(Math.random() * max)
}

const number = Random(dadosIniciais.categorias.length)
const number2 = Random(dadosIniciais.categorias[number].videos.length)
function Home() {
  return (

    <div style={{ background: "#141414" }}>
      <Menu />

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      /> */}
       <BannerMain
        videoTitle={dadosIniciais.categorias[number].videos[number2].titulo}
        url={dadosIniciais.categorias[number].videos[number2].url}
        videoDescription={dadosIniciais.categorias[number].videos[number2].descricao}
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
      />      
        
  

      <Footer />
    </div>
  );
}

export default Home;
