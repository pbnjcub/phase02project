import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// const express = require("express")
// const { google } = require("googleapis")

// const app = express()
// const port = 8080
// const id ="1mnMPP1Mw2ZYJGvJP_Jm5-E6OsT23NpFt-FIZWXIha1g"

// async function authSheets() {
//     //Function for authentication object
//     const auth = new google.auth.GoogleAuth({
//       keyFile: "keys.json",
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });
  
//     //Create client instance for auth
//     const authClient = await auth.getClient();
  
//     //Instance of the Sheets API
//     const sheets = google.sheets({ version: "v4", auth: authClient });
  
//     return {
//       auth,
//       authClient,
//       sheets,
//     };
//   }

  


const root = ReactDOM.createRoot(document.getElementById('root'));
const myElement = <App/>;
root.render(myElement);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// const container = document.getElementById('app')
// const root = createRoot(container)
// root.render(<App tab="home" />)