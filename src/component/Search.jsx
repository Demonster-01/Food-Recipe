import { useEffect, useState } from "react";
import styles from "./Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f79ff06b42f540738d537ae18945202f";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");

  //   useEffect hook
  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
