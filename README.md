# 🖲 CRUD com consumo de API Rest
Eu criei uma aplicação simples com CRUD para consumo de API com as seguintes rotas:

Create a user;
List existing users;
Edit a user;
Delete a user.

# 📀 Tecnologies

Foi utilizada as seguintes tecnologias :

- 🖥 Node JS (Para Criação do Servidor, API e Rotas) e bibliotecas NPM;
- 🌟 React (UI);
- 🔗 Prisma (Para integração com Banco de dados);
- 🏦 Mongo DB (Banco de dados);
- 🖌 CSS (Estilização)
- 🏗 HTML (Estutura de Formulário e página)

# ❓Como Rodar o projeto?

Para rodar o projeto você deve realizar os seguintes passos:

Antes de tudo, deve-se instalar o _node js_. Consultar documentação em : https://nodejs.org/en.

Depois de instala-lo, você vai precisar instalar algumas dependências com o _NPM_:

npm install

Configure o arquivo ⚙#_.env_# com suas credenciais do mongo db Atlas:

DATABASE_URL="mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/seu_banco?retryWrites=true&w=majority"

Instalar Prisma CLI: 

npm install prisma --save-dev

Initialize Prisma: 

npx prisma init

Install Prisma Client:

npm install @prisma/client

Sincronizar com banco de Dados:

npx prisma generate

E inicie o servidor e o Prisma:

npm run dev
# O servidor rodará por padrão na porta 3000
&&
npx prisma studio (_Estou usando a versão 6.4.1_)

# ⭐ Rodar o Front-End (React)

Agora, vamos rodar o Front-end com o React.

Entre dentro da pasta onde está a aplicação cadastro-usuarios e use os seguintes comandos:

_Instalar Dependências_: npm install
_Start na aplicação_: npm run dev _(O Vite abrirá a aplicação geralmente em http://localhost:5173)_
