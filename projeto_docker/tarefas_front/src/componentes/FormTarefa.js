import React, { useState } from 'react'

const formVazio = () => {
  return {
    titulo: ''
  };
};

export default function FormTarefa({onAdicionar}) {
  const [form, setForm] = useState(formVazio());

  const submeter = (e) => {
    e.preventDefault();
    onAdicionar(form).then(() => {
      setForm(formVazio());
    });
  };

  const setValor = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <>
      <h3>Nova Tarefa:</h3>
      <form onSubmit={submeter}>
        <p>
          <label>Tarefa:</label>
          <input name="titulo" value={form.titulo} onChange={setValor}/>
        </p>        
        <p>
          <button>Adicionar</button>
        </p>
      </form>
    </>
  )
}
