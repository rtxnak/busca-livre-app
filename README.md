# Busca-Livre-app
## About project
![Captura de tela de 2023-04-17 00-14-44](https://user-images.githubusercontent.com/88905400/232369335-5ee82067-01d0-4a67-b1f6-82937463dc28.png)

This project was developed to a technical test with the [skills](#skills) on a full stack situation. Its a single front page to search and show products by query and category from Mercado Livre and Buscapé pages.

Each search is performed like this:
 * In Mercado Livre - it's performed with help of [MercadoLivreApi](https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br);
 * In Buscapé - it's a Web Scrapping added to the backend API.

For each new search and its results are stored in a database, if the same search is carried out again, the page will show the results stored in the database.


## Skills 
On FrontEnd:
 - Functional Programming in Typescript is the base language;
 - ReactJs/NextJs and Tailwindcss to create the pages;
 - Axios to do the API connection;

On BackEnd:
 - OOP in Typescript is the base language;
 - Express framework from Node.js;
 - ODM library mongoose for MongoDB database modeling;
 - zod library for schema declaration and validation;
 - puppeteer library for web scrapping;
 
 
 ## Opening the app locally
 
On terminal:

1. Please install and check the version of the following services on your system:

[Docker](https://docs.docker.com/get-docker/)
```bash
  docker -v
```
[Docker-Compose](https://docs.docker.com/compose/install/)
```bash
  docker-compose -v
```

2. Clone the repository in your preferred folder
```bash
  git clone git@github.com:rtxnak/busca-livre-app.git
```

3. Move to app folder
```bash
  cd busca-livre-app/
```

4. Run the application with docker-compose
```bash
  npm run compose:up
```

5. The application can be accessed through:

    http://localhost:3000/

6. Finishing the application
```bash
  npm run compose:down
```


 ## Web Page
 You can access the application on:

https://buscalivre.up.railway.app/
