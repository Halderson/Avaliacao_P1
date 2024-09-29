import React from 'react'

export default function ListaDeTarefas({tarefas, onExcluir}) {
  const renderTarefa = (t) => {
    return (
      <li>{t.titulo} <button onClick={() => onExcluir(t)}>Excluir</button></li>      
    );
  };

  return (
    <>
    <hr/>
    <h3>Tarefas:</h3>
    <ol>
      { tarefas.map(renderTarefa) }
    </ol>
    </>
  )
}
