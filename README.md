# Tunatech-website

## How to run?

- npm i
- npx webpack-dev-server --content-base dist/
- Open http://localhost:8080/

## How to deploy?
- Create a file .env-local based on .env-local-example

### Deploy the full project
- npx webpack -p
- npm run deploy

### Deploy the data dir
- npx webpack -p
- npm run deploy -- -d

### Testing
- Open tunatech.mx