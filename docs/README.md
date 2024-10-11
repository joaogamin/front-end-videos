
# YouTube URL Manager - Front-end

## Descrição

Este é o front-end do projeto **YouTube URL Manager**, uma aplicação web para gerenciar URLs de vídeos do YouTube. A aplicação permite inserir, listar, tocar, atualizar e deletar URLs, sendo desenvolvida utilizando **Next.js** para a interface e **Vercel** para o deploy.

## Funcionalidades

- **Inserir URL**: Permite ao usuário adicionar uma URL de vídeo do YouTube para a lista.
- **Listar URLs**: Exibe uma lista de vídeos previamente armazenadas.
- **Tocar vídeo**: Ao clicar no vídeo na lista, o vídeo é reproduzido diretamente na aplicação.
- **Deletar URL**: Permite ao usuário remover vídeos (URLs) da lista.
- **Atualizar URL**: Permite ao usuário atualizar vídeos (URLs) existentes na lista.

## Tecnologias Utilizadas

- **Next.js**: Framework para aplicações React, com renderização no lado do servidor.
- **Axios**: Biblioteca para fazer requisições HTTP, utilizada para comunicação com o back-end.
- **Vercel**: Plataforma utilizada para fazer o deploy da aplicação front-end.
- **Tailwind CSS**: Framework CSS para estilização.

## Requisitos para rodar a aplicação localmente

- **Node.js** (v14 ou superior)
- **Yarn** ou **npm** para gerenciamento de dependências

## Instalação e Configuração

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências necessárias:

   ```bash
   yarn install
   # ou
   npm install
   ```

4. Crie o arquivo `.env.local` na raiz do projeto e adicione a seguinte variável de ambiente para configurar o acesso ao back-end:

   ```bash
   BACKEND_API_URL=https://sua-api-render-url.onrender.com/api 
   ```

   Certifique-se de que a URL da API no Render esteja correta. Caso subir o back-end localmente, insira a URL local.

## Como Usar a Solução

1. Acesse a aplicação no navegador através do endereço do deploy no Vercel.
2. Na página principal, você poderá inserir uma URL de um vídeo do YouTube ao clicar no modal "Adicionar vídeo" e inserir a URL desejada.
3. Após inserir a URL, clique no botão "Adicionar" para armazenar o vídeo.
4. A lista de vídeos adicionados aparecerá na direita (desktop) ou abaixo do player (mobile). Você poderá clicar em qualquer vídeo na lista para reproduzi-lo.
5. Para remover uma URL da lista, clique no botão de opções ao lado do vídeo correspondente e clique em deletar e confirme a ação.
6. Para atualizar uma URL da lista, clique no botão de opções ao lado do vídeo correspondente e clique em atualizar, inserindo a nova URL.

## Deploy

O deploy será realizado na **Vercel**. Acesse o documento de instrução 
[Instruções de Deploy](./deploy.md)

## Bugs ou observações 

- **Bug ao atualizar vídeo atual**: No momento que o vídeo que está tocando é atualizado, a aplicação se perde e a página tem que ser recarregada. A duração do vídeo também é perdida.

## Pontos de melhoria ou evoluções. 

- **Cadastro de usuário**: Uma possível melhoria seria implementar a autenticação de usuário, assim cada usuário teria seus vídeos listados.
- **Git Flow**: Seguir um processo adequadode GitFlow para um futuro trabalho em equipe.
- **Vídeo de outros provedores**: A aplicação poderia ter a opção de inserir vídeos de outros provedores além do YouTube.
- **Testes**: Implementar testes automatizados (unitários, integração e e2e) para maior consistência e confiabilidade no código.
