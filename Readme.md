# PD Desafio - Catálogo

Um catálogo de coleções e seus discos, feito em React, Node.js e MySql.

## Getting Started

Algumas instruções de como rodar esse projeto.

### Prerequisites

Primeiramente instale o banco de dados ou tenha acesso a um na nuvem.
Assim, acesse o banco rode o arquivo **initial_table.sql**.

**Atenção:**
 - Esse arquivo cria tem um script para criar um usuario default com todos os privilegios e deleta, porém isso pode ser removido.
Se removido, deve configurar o acesso ao banco no arquivo **config.js**.

- Lembrando que também está deletando a DATABASE chamada catalogo.

Se tudo estiver certo, pode rodar o script no mysql para criar as tabelas e povoar.

```
source initial_table.sql
```


### Installing

Na pasta do package.json do Node.js rode o comando abaixo:

```
npm run setup
npm run dev
```