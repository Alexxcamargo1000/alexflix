import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import FormTextArea from '../../../components/FormTextArea';

// import { Container } from './styles';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor:'#000'
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){

      setValues({
        ...values,
        [chave]: valor
      })
  }
 
  function hendleChange(info){
    setValue(info.target.getAttribute('name'),info.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(info){
        info.preventDefault();

        setCategorias([
          ...categorias,
          values
        ])

        setValues(valoresIniciais)
      }}>
        <FormField
          label = "Nome da categoria"
          name = "nome"
          type = "text"
          value = {values.nome}
          onChange = {hendleChange}
        />
        
       <FormTextArea
          label = "Descrição da categoria"
          name = "descricao"
          value = {values.descricao}
          onChange = {hendleChange}
       />

        <FormField
          label = "cor"
          name = "cor"
          type = "color"
          value = {values.cor}
          onChange = {hendleChange}
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

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
         {categorias.map((categoria, indice)=>{
           return(
            <li key={`${categoria}${indice}`}>
              
              {categoria.nome}

            </li>
           );
         })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;