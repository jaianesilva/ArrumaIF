# 🔧 Arruma IF – Sistema de Chamados de Manutenção

Aplicação desenvolvida em **React JS** para abertura e acompanhamento de chamados de manutenção no campus do IFSP Bragança Paulista.

## 📋 Sobre o Projeto

O Arruma IF é um canal direto entre quem identifica um problema no campus e a equipe responsável pelo reparo. Alunos, professores e servidores fazem login no sistema, abrem chamados e acompanham o andamento até a resolução.

### Tabelas (4 tabelas relacionais simuladas em JS)

| Tabela | Descrição |
|---|---|
| `usuarios` | Alunos, professores e servidores (também usada no login) |
| `locais` | Salas, laboratórios e áreas do campus |
| `categorias` | Tipos de problema (Informática, Audiovisual, etc.) |
| `chamados` | Registros de solicitações de manutenção |

O arquivo `src/data/database.js` simula a exportação de um banco SQLite3, com os relacionamentos entre as tabelas feitos através de chaves estrangeiras (`usuario_id`, `local_id`, `categoria_id`).

## 🔐 Login de teste

```
Prontuário: BP303030
Senha: 123456
```

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior

### Passo a passo

```bash
# 1. Entre na pasta do projeto
cd arruma-if

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm run dev

# 4. Acesse no navegador
# http://localhost:5173
```

## 📂 Estrutura do Projeto

```
arruma-if/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── assets/
    │   └── arrumaif-logo.png
    ├── components/
    │   └── Sidebar.jsx
    ├── data/
    │   └── database.js       # Dados simulados (4 tabelas)
    ├── pages/
    │   ├── Login.jsx
    │   ├── Dashboard.jsx
    │   ├── Chamados.jsx
    │   ├── Andamento.jsx
    │   ├── Locais.jsx
    │   ├── Categorias.jsx
    │   └── Usuarios.jsx
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

## Tecnologias Utilizadas

| Tecnologias | Finalidade |
|---|---|
| React 18 | Biblioteca principal de interface |
| Material UI (@mui/material) | Componentes visuais prontos |
| Material UI Icons | Ícones do Material Design |
| Emotion | Estilização dos componentes MUI |
| Vite | Ferramenta de build e desenvolvimento |
|Java Script | validação de login, manipulação de dados|

## 👥 Equipe

| Nome |
|---| ---|
|Jaiane Silva |
|Jaine Vitoria Silva|

## 📄 Licença

Projeto acadêmico – IFSP Bragança Paulista · ADS · 2026
