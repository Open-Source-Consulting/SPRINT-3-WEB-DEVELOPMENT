# Guia dos 10 commits

Todo o código já está pronto na pasta `SPRINT3-REACT`. Para recriar a entrega em 10 commits, cada integrante deve apenas copiar os arquivos indicados abaixo para o repositório de destino, executar o `git add` informado e criar o commit. Não é necessário escrever nem adaptar código.

Os commits devem ser feitos exatamente nesta ordem. Antes de cada etapa, aguarde o envio do commit anterior e execute:

```bash
git switch main
git pull --ff-only origin main
```

## Commit 1 - Leonardo Ferreira

Copiar estes arquivos completos:

```
.gitignore
.oxlintrc.json
index.html
package.json
package-lock.json
vite.config.js
src/App.jsx
src/main.jsx
```

Executar:

```bash
git add .
git commit -m "chore: configura estrutura React com Vite"
git push origin main
```

## Commit 2 - Daniel Ribeiro

Copiar estes arquivos completos:

```
src/assets/imagem1.png
src/assets/imagem2.png
src/components/CameraHeader.jsx
src/components/Viewfinder.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona cabecalho e visor da camera"
git push origin main
```

## Commit 3 - Pedrol

Copiar estes arquivos completos:

```
src/data/cameraModes.js
src/components/ModePicker.jsx
src/components/MoreModesGrid.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona seletor e modos extras da camera"
git push origin main
```

## Commit 4 - Pedrol

Copiar estes arquivos completos:

```
src/components/CameraFooter.jsx
src/css/style.css
```

Executar:

```bash
git add .
git commit -m "feat: adiciona rodape e estilos da camera"
git push origin main
```

## Commit 5 - Felipi

Copiar estes arquivos completos:

```
src/assets/gallery-preview.png
src/components/GalleryOverlay.jsx
src/components/AiSuggestionsSheet.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona galeria e sugestoes de fotografia"
git push origin main
```

## Commit 6 - Felipi

Copiar estes arquivos completos:

```
src/data/aiContent.js
src/components/AiOverlay.jsx
src/components/AiChat.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona menu e chat da JOVI AI"
git push origin main
```

## Commit 7 - Léo

Copiar estes arquivos completos:

```
src/utils/subjectClassifier.js
src/components/Formatted.jsx
src/components/GuidedMode.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona modo de fotografia guiada"
git push origin main
```

## Commit 8 - Léo

Copiar este arquivo completo:

```
src/components/AutomaticMode.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona modo automatico da JOVI AI"
git push origin main
```

## Commit 9 - Daniel

Copiar este arquivo completo:

```
src/components/CameraApp.jsx
```

Executar:

```bash
git add .
git commit -m "feat: adiciona aplicativo principal e persistencia local"
git push origin main
```

## Commit 10 - Daniel

Copiar estes arquivos completos:

```
README.md
INTEGRANTES.TXT
GUIA_10_COMMITS.md
```

Antes de copiar o README, confirme que o link real da Vercel já foi preenchido.

Executar:

```bash
git add .
git commit -m "docs: adiciona instrucoes e identificacao da equipe"
git push origin main
```

## Verificação depois do commit 10

Somente depois que todos os arquivos estiverem presentes, execute:

```bash
npm install
npm run lint
npm run build
```

O projeto final já contém todas as conexões entre os componentes. Os integrantes devem copiar os arquivos completos, sem alterar trechos internos.