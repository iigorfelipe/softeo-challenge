<h1 align="center">Softeo Challenge</h1>

<p align="center">
  <i>
    This is a repository used to store a technical challenge I received from <a href="https://softeo.com.br/">Softeo</a>.
  </i>
</p>

<div align="center">
  🔧  README AND PROJECT IN DEVELOPMENT 🔧 
  <img width="100%" src="https://octodex.github.com/images/manufacturetocat.png" />
</div>

<div align="center">
  <h2> Wireframe made in Excalidraw </h2>

  after being redirected click on the image again to enlarge it

<img width="100%" src="https://user-images.githubusercontent.com/87145566/189784324-45fec122-bbee-47a5-a953-af65dd33b83b.png" />

</div>

## About this app

The purpose of this application is to calculate how much you will receive in reais from your customers in a certain chosen period.

The application will take the date you choose and on top of it will make a calculation with the data of the chosen customer, such as the total amount that this customer owes you, the number of times this customer chose to pay this amount in installments, and the due date of the plots.

After the calculation, the application will show the result already converted into reais for the chosen period.

- Note: Only two screens were implemented, the main screen and the detailed calculation screen for each user, but the screen that performs the calculation with all users will soon be developed.

## Technologies

### Frontend

- TypeScript
- React - `Vite (react-ts)`
- Hooks
- Context
- Styled Components
- Axios
- Sweetalert

### Backend

- TypeScript
- Node.js
- Express.js
- cors
- dotenv
- Sequelize
- mysql2

## Development Tools

<p>

  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-logo"/>
  <img width="78" src="https://altyra.com/wp-content/uploads/2018/11/mysql-logo-png-transparent.png" alt="mysql-logo"/>
  <img width="58" src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" alt="postman-logo"/>

</p>

## Installation

```bash
git clone git@github.com:iigorfelipe/softeo-challenge.git
```

### Frontend

```bash
cd softeo-challenge/frontend
```

```bash
npm install
```

### backend

```bash
cd softeo-challenge/backend
```

```bash
npm install
```

## Local Usage

### Frontend

```bash
cd softeo-challenge/frontend
```

```bash
npm run dev
```

### backend

```bash
cd softeo-challenge/backend
```

```bash
npm run dev
```

## References

### Frontend:

- [Vitejs - Docs](https://vitejs.dev/guide/)

- [Axios - Docs](https://axios-http.com/ptbr/docs/intro)

- [Iconfy - Site](https://icon-sets.iconify.design/?query=home)

- [Sweetalert - Docs](https://www.npmjs.com/package/sweetalert)

- [styled-components - Docs](https://styled-components.com/docs)

- [DateTimeFormat - Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

- [NumberFormat - Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

- [Como criar parcelas com data mês a mês - Objeto Date Javascript e nodejs - Video](https://www.youtube.com/watch?v=konXXMyM5Es&ab_channel=DevByMarcos)

- [Date - Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Backend:

- [Sequelize (Model.init) - Docs](https://sequelize.org/docs/v6/other-topics/typescript/#the-case-of-modelinit)

- [Trybe - Course](https://app.betrybe.com/course)