import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  

  function setValues(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor, // retorna = name: 'value'
    })
  }

  function handleChanges(e) {
    setValues(
      e.target.getAttribute('name'), 
      e.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {formValues.name}</h1>

      <form onSubmit={function handleNewCategory(e) {
        e.preventDefault();
        
        setCategories([ 
          ...categories,
          formValues
         ]);

         setValues(initialValues);
        }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChanges}
        />

        <FormField 
          label="Descrição"
          type="textarea"
          name="description"
          value={formValues.description}
          onChange={handleChanges}
        />

        <FormField 
          label="Cor"
          type="color"
          name="color"        
          value={formValues.color}
          onChange={handleChanges}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;