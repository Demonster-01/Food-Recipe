import styles from "./Item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={
              "https://api.spoonacular.com/cdn/ingredients_100x100/" +
              item.image
            }
            alt={""}
          />
        </div>
        <div>
          <div className={styles.detailContainer}>
            {item.name} <br />
            {item.amount}/{item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
