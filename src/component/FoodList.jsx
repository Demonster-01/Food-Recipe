import FoodItem from "./FoodItem";

export default function FoodList({ setFoodId, foodData }) {
  return (
    <>
      {foodData.map((food, index) => (
        <FoodItem setFoodId={setFoodId} key={food.id || index} food={food} /> // Fall back to `index` if `id` is not unique
      ))}
    </>
  );
}
