function adicionarTarefa() {
  const input = document.getElementById('tarefa-input');
  const tarefaTexto = input.value.trim();

  if (tarefaTexto === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = tarefaTexto;

  const botaoDeletar = document.createElement('button');
  botaoDeletar.textContent = 'Excluir';
  botaoDeletar.onclick = () => li.remove();

  li.appendChild(botaoDeletar);
  document.getElementById('lista-tarefas').appendChild(li);

  input.value = '';
}
