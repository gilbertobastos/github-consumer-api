# GITHUB-CONSUMER-API

API bem simples que tem o objetivo de consumir a API do próprio GitHub para obter informações relacionadas aos repositórios dos usuários.
 
## Endpoints

## /repositories/{Nome do usuário}

Parâmetros do header:

* API_KEY: Chave para consumir a API
  
Parâmetros GET:

* language: A linguagem de programação para realizar o filtro (opcional)
* sorting: "asc" ou "desc" (de acordo com a data de criação) (opcional)
* maxResults: Número máximo de resultados (opcional)