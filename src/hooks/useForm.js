import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValue(valoresIniciais);
  }
  return {
    values,
    hendleChange,
    clearForm,
  };
}

export default useForm;
