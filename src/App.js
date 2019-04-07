import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("reacthooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );

      setResults(response.data.hits);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div>loading results...</div>
      ) : (
        <div>
          <input
            onChange={event => setQuery(event.target.value)}
            value={query}
          />
          <button onClick={getResults}>Search</button>
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </div>
      )}

      {error && <div>{error.message}</div>}
    </>
  );
}
