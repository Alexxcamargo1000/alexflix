import React from 'react';

// import { Container } from './styles';

function FormTextArea({label,name, value ,onChange }) {
  return (

    <div>
        <label>
            {label}:
        <textarea
            value={value}
            name={name}
            onChange={onChange}
        />
        </label>       
    </div>
  );
}

export default FormTextArea;