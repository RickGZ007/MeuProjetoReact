# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

🐳 Guia Rápido: Docker mDocker
1. Preparar Arquivos (Na Raiz)
Crie o arquivo Dockerfile:

Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
Crie o arquivo .dockerignore:

Plaintext
node_modules
build
.git
.gitignore
Dockerfile

2. Comandos de Inicialização
Siga esta ordem no terminal:

Passo 1: Gerar a imagem

docker build -t meu-projeto-react .

Passo 2: Conferir se foi criada

docker images

Passo 3: Subir o container

docker run -p 8080:80 meu-projeto-react

3. Acesso
🔗 Acesse em: http://localhost:8080

Nota: Se estiver usando Vite, mude /app/build para /app/dist no Dockerfile.


 🔄Ciclo de Uso do DockerCenário A: Não mudei o código (Apenas reiniciar)Se você já buildou a imagem antes e só quer subir o que já estava pronto, não precisa criar um container novo.
 Verifique o ID ou Nome do container parado: 
 
 docker ps -a

Inicie o container existente:

docker start ecstatic_sammet

(Troque ecstatic_sammet pelo nome que aparecer no seu terminal).

Cenário B: Mudei o código (Atualizar aplicação)Como o Docker cria uma "foto" estática do código no momento do build, se você alterou uma linha no React, precisa de uma nova imagem e um novo container.Gere uma nova imagem com as alterações:
docker build -t meu-projeto-react .

Suba o novo container (Limpando o antigo):
docker run -p 8080:80 --rm meu-projeto-react

A flag --rm é essencial aqui: ela deleta o container assim que você o para, evitando acumular containers inúteis na sua lista.

📋 Resumo de Comandos
Objetivo

Limpar containers parados	docker container prune

Parar um container rodando	docker stop <nome_ou_id>

Ver todos os containers	docker ps -a

Build + Rodar (Padrão Dev)	
docker build -t nome . seguido de docker run --rm ...