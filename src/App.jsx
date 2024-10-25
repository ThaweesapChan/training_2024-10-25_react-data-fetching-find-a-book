import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [booklist, setBookList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getBookList();
  }, [booklist]);

  const getBookList = async () => {
    try {
      const result = await axios.get(
        `https://openlibrary.org/search.json?q=${input}`
      );
      setBookList(result.data.docs);
    } catch {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <ul>
        {booklist.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
