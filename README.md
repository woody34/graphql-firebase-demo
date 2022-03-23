# Graphql with Firebase Funcions

## Pre-reqs

`npm i -g firebase-tools`


## Getting started

```sh
# start server
firebase serve --only functions

# test graphql query
curl --request POST  --url 'http://localhost:5000/gql-woody34/us-central1/api/graphql' --header 'Content-Type: application/json' --data '{"operationName":null,"variables":{},"query":"{\n  hello\n}\n"}'
```