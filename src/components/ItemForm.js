import React, { useState, useEffect } from "react";

import Header from "./Header";
import ItemForm from "./ItemForm";
import Items from "./Items";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(data => setToys(data))
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDonateToy(donatedToy) {
    const updatedToys = toys.filter(toy => toy.id !== donatedToy.id)
    setToys(updatedToys)
  }

  function handleLikedToy(updatedToy) {
    const updatedToys = toys.map(toy => {
      if(toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={handleDonateToy} onUpdate={handleLikedToy} />
    </>
  );
}

export default App;
