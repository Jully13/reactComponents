import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((response) => response.json())
    .then((data) => console.log(data));
