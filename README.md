# Meat API

Meat app API from the course with NodeJS / Restify & MongoDB.
## How to run
> npm i restify@6.3.4

> npm i @types/restify@5.0.6 -D -E

> npm i nodemon -g

## Métodos HTTP

- **GET**: Requisição de algum recurso.
- **POST**: Quando queremos enviar algo a ser processado.
- **PUT / PATCH**: Quando queremos alterar o conteúdo no servidores.
- **DELETE**: Quando queremos deletar o conteúdo no servidores.
- **HEAD**: Similar ao *GET*, porém retorna apenas os headers são retornados. 
É bem usado quando o browser quer determinar se o conteúdo foi modificado e determinar se a versão que está guardado em cache ainda é atual.
- **OPTIONS**: Cliente geralmente usa a opção para verificar quais as operações estão disponíveis no servidor para determinado recurso.

## Códigos de Respostas HTTP

##### Status de Sucessos [200]
- **200** - Resposta bem sucedida
- **201** - OK, o recurso foi criado
- **202** - Servidor entende a requisição porém não terminou o processamento ainda (Assíncrono)
- **204** - A requisição foi retornada porém não contém conteúdo no corpo da resposta

##### Status de Erros [300 / 400 / 500]
- Faixa **300**: Sobre redirecionamento de conteúdo
- Faixa **400**: Sobre erro na requisição
  - **400** (Bad Request) Erro no cliente, um request mal formatado e impossível de ser processado.
  - **401**: Não autorizado (*Permissões*)
  - **403**: Proibido (*Permissões*)
  - **404**: Recurso que não existe no servidor.
- Faixa **500**: Erros internos do servidor.

### O que é REST?
- REST (**Representational State Transfer**) é um estilo de arquitetura que define alguns padrões que um serviço deve seguir, utilizando o protocolo HTTP como forma de comunicação. REST sugere que o desenvolvedor exponha a API com um conjunto de URL (endereços) que irão servir como guia para a localização de recursos.

### Características de uma API REST
- **Stateless**: Significa que toda requisição irá ter todas as informações necessárias para ser processada. Manter essa comunicação irá reduzir a necessidade de manter estado no servidor, reduzindo o consumo do servidor aumentando a escalabilidade da aplicação. Uma requisição não depende de nenhuma outra.

- **Uniforme**: Toda a API contém a sua organização uniforme, na forma de identificar os recursos, as representações de dados, etc...