# 🚀 Meu Projeto React

Este projeto é uma aplicação **React** desenvolvida para fins de estudo e prática, focada em boas práticas de desenvolvimento e agora totalmente preparada para rodar em ambientes isolados utilizando **Docker**.

## 🛠️ Tecnologias Utilizadas

  * **React** (Biblioteca para interface)
  * **Nginx** (Servidor de alta performance para a versão de produção)
  * **Docker** (Containerização para facilitar o deploy e execução)

-----

## 💻 Como Rodar Localmente (Sem Docker)

Se você prefere rodar o projeto diretamente na sua máquina com Node.js instalado:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie o projeto em modo de desenvolvimento:**
    ```bash
    npm start
    ```
    Acesse: [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

-----

## 🐳 Como Rodar com Docker (Recomendado)

O Docker simplifica o processo de configuração do ambiente, garantindo que o projeto funcione em qualquer máquina.

### 1\. Criar a Imagem

Gere a "imagem" (o pacote estático) do projeto:

```bash
docker build -t meu-projeto-react .
```

### 2\. Subir o Container

Inicie a aplicação mapeando a porta da sua máquina para a porta do container:

```bash
docker run -p 8080:80 --rm --name container-react meu-projeto-react
```

🔗 **Acesse em:** [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080)

> **Dica:** A flag `--rm` apaga o container automaticamente quando você o interrompe (Ctrl+C), mantendo o seu ambiente organizado.

-----

## 🔄 Ciclo de Atualização (Mudei o Código)

Sempre que você alterar o código do React, a imagem antiga fica desatualizada. Siga estes passos para ver as mudanças:

1.  **Parar o container atual:** Pressione `Ctrl + C` no terminal onde o container está rodando ou use:
    ```bash
    docker stop container-react
    ```
2.  **Refazer o Build:** Gere a imagem novamente para incluir as novas alterações:
    ```bash
    docker build -t meu-projeto-react .
    ```
3.  **Rodar novamente:**
    ```bash
    docker run -p 8080:80 --rm --name container-react meu-projeto-react
    ```

-----

## ⚡ Reiniciar Container Existente (Sem mudar código)

Se você apenas parou o container e quer ligá-lo de novo **sem ter alterado o código**:

1.  **Localize o container:** `docker ps -a`
2.  **Inicie-o:** `docker start container-react`

-----

## 📋 Resumo de Comandos Docker

| Objetivo | Comando |
| :--- | :--- |
| **Ver containers ativos** | `docker ps` |
| **Ver todos os containers** | `docker ps -a` |
| **Parar um container** | `docker stop <nome_ou_id>` |
| **Limpar containers parados** | `docker container prune` |
| **Remover uma imagem** | `docker rmi meu-projeto-react` |

-----

## 📁 Scripts Disponíveis (NPM)

  * `npm start`: Roda a aplicação em modo de desenvolvimento.
  * `npm run build`: Cria a versão otimizada para produção na pasta `build`.
  * `npm test`: Inicia o executor de testes.

-----

*Desenvolvido por [Ricardo Gonzalez](https://www.google.com/search?q=https://github.com/RickGZ007)*
