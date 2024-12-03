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
  const [titleArticle, setTitleArticle] = useState("");
  const [article, setArticle] = useState([]);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const AddArticle = [...article, titleArticle];
    setArticle(AddArticle);
  };
  return (
    <>
      <div className="container">
        <h1>My blog</h1>
        <form onSubmit={HandleSubmit} className="form-control">
          <div>
            <input
              type="text"
              value={titleArticle}
              onChange={(e) => {
                setTitleArticle(e.target.value);
              }}
            />
            <button>Invia</button>
          </div>
        </form>
        <hr />
        {article.map((name, id) => (
          <li key={id}>Articolo di {name}</li>
        ))}
      </div>
    </>
  );
}

export default App;
