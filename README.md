
# YouTube URL Manager - Front-end

## Descrição

Este é o front-end do projeto **YouTube URL Manager**, uma aplicação web para gerenciar URLs de vídeos do YouTube. A aplicação permite inserir, listar, tocar e deletar URLs, sendo desenvolvida utilizando **Next.js** para a interface e **Vercel** para o deploy.

## Funcionalidades

- **Inserir URL**: Permite ao usuário adicionar uma URL de vídeo do YouTube para a lista.
- **Listar URLs**: Exibe uma lista de URLs previamente armazenadas.
- **Tocar vídeo**: Ao clicar na URL, o vídeo é reproduzido diretamente na aplicação.
- **Deletar URL**: Permite ao usuário remover URLs da lista.

## Tecnologias Utilizadas

- **Next.js**: Framework para aplicações React, com renderização no lado do servidor.
- **Axios**: Biblioteca para fazer requisições HTTP, utilizada para comunicação com o back-end.
- **Vercel**: Plataforma utilizada para fazer o deploy da aplicação front-end.
- **Tailwind CSS**: Framework CSS para estilização.

## Requisitos

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
   NEXT_PUBLIC_API_URL=https://sua-api-render-url.onrender.com/api
   ```

   Certifique-se de que a URL da API no Render esteja correta.

## Como Usar a Solução

1. Acesse a aplicação no navegador através do endereço do deploy no Vercel.
2. Na página principal, você poderá inserir uma URL de um vídeo do YouTube no campo indicado.
3. Após inserir a URL, clique no botão "Adicionar" para armazenar o vídeo.
4. A lista de vídeos adicionados aparecerá logo abaixo. Você poderá clicar em qualquer URL para reproduzir o vídeo.
5. Para remover uma URL da lista, clique no botão "Deletar" ao lado do vídeo correspondente.

## Execução Local

Para rodar o projeto localmente, siga os passos abaixo:

1. Inicie o servidor de desenvolvimento:

  ```bash
   yarn dev
   # ou
   npm run dev
  ```

2. Acesse a aplicação no navegador através do seguinte endereço:

  ```
   http://localhost:3000
  ```

## Deploy

O deploy será realizado na **Vercel**. Siga os passos abaixo para realizar o deploy:

1. Acesse a plataforma Vercel (https://vercel.com) e faça login com sua conta.
2. Importe o repositório GitHub do projeto para o Vercel.
3. Siga as instruções da Vercel para configurar o projeto e realizar o deploy.
4. O projeto estará disponível em uma URL pública gerada pela Vercel.

### Funcionalidades

- **Inserir URL**: Inserção de URLs do YouTube.
- **Listar URLs**: Exibição de todas as URLs salvas.
- **Tocar vídeo**: Reproduzir vídeos do YouTube a partir da lista.
- **Deletar URL**: Remover URLs da lista.

### Observações

- Certifique-se de que o back-end esteja rodando e esteja acessível.

## Sugestões de Melhorias

- **Inserção de vídeos de outros provedores**: Expandir a funcionalidade de inserção de URLs para permitir vídeos de outros provedores além do YouTube.
- **Autenticação no front-end**: Implementar autenticação para gerenciar diferentes usuários e suas listas de URLs.
- **Funcionalidade de pesquisa**: Implementar uma funcionalidade de pesquisa para facilitar a busca por URLs.

## Passo a Passo do Deploy

1. Após configurar o projeto na Vercel, você pode adicionar variáveis de ambiente diretamente na plataforma para garantir o correto funcionamento.
2. O projeto será automaticamente construído e publicado após cada commit feito no repositório GitHub conectado.
3. Acesse a URL gerada para visualizar o front-end em produção.