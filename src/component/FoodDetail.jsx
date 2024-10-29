import { useEffect, useState } from "react";
import styles from "./FoodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "f79ff06b42f540738d537ae18945202f";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
      </div>
      <div className={styles.recipeDetail}>
        <span>
          <strong>⏰{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? "🌾 vegetarian" : "🥩 Non-vegetarian"}
          </strong>
          {food.vegan ? "Vegan" : ""}
        </span>
        <span>
          <strong> 👨‍👨‍👦‍👦serves {food.servings}</strong>
        </span>
      </div>
      <div>
        <span>NRs {food.pricePerServing} </span>
      </div>
      <h2>Ingredients:</h2>
      <ItemList food={food} isLoading={isLoading} />
      <h3>Instructions:</h3>
      <div className={styles.recipeInstruction}>
        <ol>
          {isLoading ? (
            <p> Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
