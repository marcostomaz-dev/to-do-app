# 📝 To-Do List (HTML + CSS)

## 📌 Descrição

Este projeto consiste em uma aplicação de **To-Do List (Lista de Tarefas)** desenvolvida utilizando apenas **HTML e CSS**, sem o uso de JavaScript.

O objetivo é demonstrar como é possível **simular interações e estados** (como marcar tarefas como concluídas) utilizando apenas recursos nativos do HTML e seletores avançados do CSS.

---

## 🎯 Objetivo Acadêmico

- Praticar **HTML semântico**
- Aplicar conceitos de **CSS moderno**
- Utilizar **engenharia de prompt** no desenvolvimento
- Simular comportamento dinâmico sem JavaScript
- Trabalhar com **acessibilidade básica**

---

## 🧠 Como funciona (lógica do projeto)

Como não há JavaScript, o projeto utiliza uma abordagem baseada em **estado visual**:

- Cada tarefa possui um **checkbox**
- O estado `checked` representa uma tarefa concluída
- O CSS usa o seletor `:checked` para alterar a aparência da tarefa

👉 Ou seja:
> O HTML define o estado e o CSS reage a ele

---

## 🧱 Estrutura do Projeto

### 📄 HTML

O HTML foi estruturado de forma semântica:

- `<main>` → container principal
- `<header>` → título da aplicação
- `<section>` → separação de áreas (formulário e lista)
- `<form>` → entrada de dados (simulada)
- `<fieldset>` e `<legend>` → agrupamento de prioridade
- `<ul>` e `<li>` → lista de tarefas
- `<input type="checkbox">` → controle de estado
- `<label>` → interação acessível

---

### 🎨 CSS

O CSS é responsável por toda a experiência visual:

#### ✔ Layout
- Centralização com `flexbox`
- Container com `box-shadow` e `border-radius`
- Espaçamento com `gap`

#### 🎯 Prioridades
As tarefas possuem classes:

- `.alta` → vermelho
- `.media` → amarelo
- `.baixa` → verde

#### ✅ Tarefa concluída
- Uso de `input:checked + label`
- Efeitos:
  - Texto riscado
  - Cor mais clara
  - Feedback visual

#### ♿ Acessibilidade
- Uso de `:focus` para navegação por teclado
- Labels associados corretamente aos inputs
- Texto complementar para prioridade

---

## ⚠️ Limitações

Por não utilizar JavaScript, o projeto possui limitações:

- ❌ Não é possível adicionar tarefas dinamicamente
- ❌ Não há persistência de dados
- ❌ O botão "Adicionar" é apenas visual
- ❌ Não há remoção de tarefas

👉 As tarefas são **pré-definidas no HTML**

---

## 💡 Diferenciais do Projeto

- Uso de **HTML semântico correto**
- Estrutura preparada para futura integração com JavaScript
- Simulação de estados com CSS puro
- Organização de código clara e escalável
- Aplicação de boas práticas de acessibilidade

---

## 🚀 Possíveis melhorias futuras

- Adicionar JavaScript para:
  - Criar/remover tarefas
  - Salvar dados (LocalStorage)
- Implementar filtros (pendentes/concluídas)
- Melhorar UI com animações
- Responsividade avançada

---

## 👨‍💻 Autor

Desenvolvido por **Marcos Tomaz**

---
