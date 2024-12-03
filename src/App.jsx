//! Esercizio
/* 
Creare un semplice form con un campo input per il titolo di un articolo del blog.

Al submit del form, mostrare la lista degli articoli inseriti.

Infine dare la possibilità di cancellare ciascun articolo utilizzando un'icona.

BONUS

    Implementare la funzionalità di modifica del titolo di un post.
    Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore) */

/* Importo useState  */
import { useState } from "react";

import "./App.css";

function App() {
  /* Uso lo use state per settare l'input  */
  const [titleArticle, setTitleArticle] = useState("");

  /* Creo l'array vuoto  */
  const [article, setArticle] = useState([]);

  /* Blocco l'invio del form con l'handler */
  const HandleSubmit = (event) => {
    event.preventDefault();

    /* Creo una copia dell'array originale */
    const AddArticle = [...article, titleArticle];
    setArticle(AddArticle);
  };

  /* Funzione per cancellare l'elemento */
  const removeArticle = (id) => {
    const deleteArticle = article.filter((item, index) => {
      return index !== id;
    });
    setArticle(deleteArticle);
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
            <button className="btn btn-primary mx-2">Invia</button>
          </div>
        </form>
        <hr />
        {/* Creo una copia con il map e aggiunngo l'elemento al DOM */}
        <ul>
          {article.map((name, id) => (
            <li className="m-3" key={id}>
              Articolo di {name}
              <button
                onClick={() => removeArticle(id)}
                className="btn btn-danger mx-2"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
