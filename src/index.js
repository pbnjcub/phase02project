import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const myElement = <App />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// const container = document.getElementById('app')
// const root = createRoot(container)
// root.render(<App tab="home" />)