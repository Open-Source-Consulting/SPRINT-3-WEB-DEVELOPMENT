# JOVI - Precision Camera

Projeto da Sprint 3 de Web Development do Challenge JOVI 2026. A aplicação simula a interface de câmera de um smartphone e foi migrada de HTML, CSS e JavaScript vanilla para React, preservando o visual original.

## Funcionalidades

- Seleção dos modos Night, Portrait, Photo, Video e Mais.
- Grade com 12 modos extras de fotografia.
- Alternância entre câmera traseira e frontal.
- Animação de captura de foto.
- Galeria com análise simulada da JOVI AI.
- Chatbot com respostas aleatórias sobre fotografia.
- Modo guiado com instruções de captura.
- Modo automático com configurações simuladas.
- Persistência de preferências e textos no `localStorage`.
- Layout responsivo para desktop, tablet e mobile.

## Tecnologias utilizadas

- React 19
- React DOM 19
- JavaScript
- Vite 8
- HTML5 semântico
- CSS3
- Google Fonts
- Material Symbols

## Pré-requisitos

- Node.js 20.19 ou mais recente, ou Node.js 22.12 ou mais recente.
- npm.

## Como instalar

Abra um terminal na pasta do projeto e execute:

```bash
npm install
```

## Como executar em desenvolvimento

```bash
npm run dev
```

O terminal mostrará o endereço local, normalmente `http://localhost:5173`.

## Como gerar e testar a versão de produção

```bash
npm run build
npm run preview
```

O build será criado na pasta `dist`.

## Verificação de código

```bash
npm run lint
```

## Autenticação

Não se aplica. O projeto não possui tela de login, usuários ou senhas de teste.

## Uso de localStorage

A aplicação armazena dados somente no navegador do usuário:

- `jovi.activeMode`: último modo de câmera selecionado.
- `jovi.isFrontCamera`: câmera frontal ou traseira.
- `jovi.chatMessages`: histórico do chatbot.
- `jovi.guidedInput`: última descrição do modo guiado.
- `jovi.autoInput`: última descrição do modo automático.

## Uso de Math

O chatbot utiliza `Math.random()` para escolher uma resposta e `Math.floor()` para transformar o resultado em um índice inteiro. Essas operações também são usadas para variar o tempo de resposta simulado.

## Uso de Inteligência Artificial

Ferramentas de IA foram utilizadas como apoio para analisar os requisitos da Sprint, planejar a componentização, auxiliar na migração do código vanilla para React e revisar a documentação e os testes. Todo o código foi organizado para permanecer compatível com o nível de conhecimento da equipe e deve ser revisado e compreendido pelos integrantes antes da entrega. A JOVI AI exibida na interface é uma simulação local e não consome uma API de inteligência artificial.

## Estrutura principal

```text
src/
├── assets/       # Imagens usadas na câmera e na galeria
├── components/   # Componentes funcionais React
├── css/          # Estilos visuais preservados do protótipo
├── data/         # Modos, respostas e configurações simuladas
├── utils/        # Classificação simples do assunto fotografado
├── App.jsx
└── main.jsx
```

## Repositório e deploy

- Repositório Git: https://github.com/Mestresupremo38/jovi-sprint3-react
- Deploy na Vercel: **PENDENTE - inserir o link antes da entrega final.**

Nenhum deploy foi realizado durante esta migração local.

## Integrantes

- Leonardo Ferreira - RM 571311
- Daniel Ribeiro - RM 571746
- Felipe Rossano - RM 569631
- Felipi Godoy - RM 573741
- Jecky Cossio - RM 572226

## Entrega

Antes de gerar o ZIP final:

1. Execute `npm run lint` e `npm run build`.
2. Teste o projeto em desktop, tablet e mobile.
3. Atualize o link da Vercel neste README.
4. Confirme que `INTEGRANTES.TXT` está no ZIP.
5. Não inclua `.git`, `node_modules` ou `.vercel` no ZIP.