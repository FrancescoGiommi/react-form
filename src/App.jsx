//! Esercizio
/* 
Creare un semplice form con un campo input per il titolo di un articolo del blog.

Al submit del form, mostrare la lista degli articoli inseriti.

Infine dare la possibilità di cancellare ciascun articolo utilizzando un'icona.

BONUS

    Implementare la funzionalità di modifica del titolo di un post.
    Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore) */

import { useState } from "react";

import "./App.css";

function App() {
  const [titleArticle, setTitleArticle] = useState("Titolo 1");

  return (
    <>
      <h1>My blog</h1>
      <form className="container">
        <div>
          <input type="text" value={titleArticle} />
        </div>
      </form>
    </>
  );
}

export default App;
