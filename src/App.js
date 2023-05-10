import React, { useState } from "react";

import TableData from "./Table";
const App = () => {
  const [getCharacter, setCharacter] = useState({
    characters: [],
  });
  const [initalState, setInitialState] = useState({
    name: "",
    publisherName: "",
    publisherAge: "",
    pageNumber: "",
    publishDate: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInitialState({
      ...initalState,
      [name]: value,
    });
  };

  const removeData = (index) => {
    setCharacter({
      characters: getCharacter.characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setCharacter({ characters: [...getCharacter.characters, initalState] });
    setInitialState({
      name: "",
      publisherName: "",
      publisherAge: "",
      pageNumber: "",
      publishDate: "",
    });
  };
  return (
    <div className="container">
      <h3>Add A New Book Information</h3>
      <p>Simple Add and Delete page.</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={initalState.name}
          onChange={handleChange}
        />
        <label htmlFor="publisherName">Publisher Name</label>
        <input
          type="text"
          name="publisherName"
          id="publisherName"
          value={initalState.publisherName}
          onChange={handleChange}
        />
        <label htmlFor="publisherAge">Publisher Age</label>
        <input
          type="number"
          name="publisherAge"
          id="publisherAge"
          value={initalState.publisherAge}
          onChange={handleChange}
        />
        <label htmlFor="pageNumber">Page Number</label>
        <input
          type="number"
          name="pageNumber"
          id="pageNumber"
          value={initalState.pageNumber}
          onChange={handleChange}
        />
        <label htmlFor="publishDate">Publish Date</label>
        <input
          type="date"
          name="publishDate"
          id="publishDate"
          value={initalState.publishDate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <TableData
        removeData={removeData}
        getCharacter={getCharacter?.characters}
      />
    </div>
  );
};

export default App;
