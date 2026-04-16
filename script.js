// Seleção dos elementos principais
const form = document.querySelector('.todo-form');
const input = document.getElementById('task-input');
const lista = document.querySelector('.todo-list');
const radios = document.querySelectorAll('input[name="priority"]');

// Função para obter prioridade selecionada
function getPrioridade() {
  let valor = "baixa";

  radios.forEach((radio, index) => {
    if (radio.checked) {
      if (index === 0) valor = "baixa";
      if (index === 1) valor = "media";
      if (index === 2) valor = "alta";
    }
  });

  return valor;
}

// Função para obter texto da prioridade
function getTextoPrioridade(prioridade) {
  if (prioridade === "alta") return "Alta prioridade";
  if (prioridade === "media") return "Média prioridade";
  return "Baixa prioridade";
}

// Função para criar nova tarefa
function criarTarefa(texto, prioridade) {
  const id = "task-" + Date.now();

  const li = document.createElement("li");
  li.classList.add("todo-item", prioridade);

  li.innerHTML = `
    <input type="checkbox" id="${id}">
    <label for="${id}">
      <span class="task-text">${texto}</span>
      <span class="task-priority">${getTextoPrioridade(prioridade)}</span>
    </label>
  `;

  lista.appendChild(li);
}

// Evento de envio do formulário
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = input.value.trim();

  if (texto === "") return;

  const prioridade = getPrioridade();

  criarTarefa(texto, prioridade);

  // Limpar input
  input.value = "";
});