# Guia de Deploy de Aplicação Next.js na Vercel

## Pré-requisitos

- Projeto Next.js pronto em um repositório no GitHub, GitLab ou Bitbucket.

## Passo 1: Acessar esse link

1. Clique no botão abaixo.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

2. Caso não tenha uma conta criada, crie uma conta na Vercel acessando os comandos do canto superior direito.
3. Caso já tenha uma conta, faça login e siga o processo.

## Passo 2: Conectar seu repositório

1. Conecte sua conta de controle de versão (se ainda não conectou).
2. Escolha o repositório do seu projeto Next.js.
3. Clique em **Import** para começar a configurar.

---

## Passo 3: Configuração do Projeto

1. A Vercel detectará automaticamente que o projeto usa Next.js e configurará os parâmetros de build. A build é geralmente configurada da seguinte forma:
    - **Framework Preset**: Next.js
    - **Build Command**: `next build`
    - **Output Directory**: `.next`

2. Você pode modificar essas configurações conforme necessário.
3. Adicione e configure suas variáveis de ambiente na aba Environment Variables.
4. Após configurado, clique em Deploy.

---

## Passo 4: Deploy da Aplicação

1. Após iniciar o deploy, a Vercel exibirá logs da build em tempo real.
2. Quando a build for concluída, você verá uma mensagem de sucesso e sua aplicação estará disponível em uma URL gerada pela Vercel, como `https://seu-projeto.vercel.app`.

---

## Passo 5: Monitorar Deploys

1. Na Vercel, você pode monitorar os diferentes deploys de seu projeto na aba **Deployments**.
2. Para cada mudança no repositório, um novo deploy será automaticamente gerado.

---

## Considerações Finais

- A Vercel cuida automaticamente do CDN e da otimização para produção.
- Sempre que você fizer um **push** no repositório pela conta cadastrada na plataforma, a Vercel realizará um novo deploy.

Agora sua aplicação está online e pronta para ser acessada por qualquer pessoa!
