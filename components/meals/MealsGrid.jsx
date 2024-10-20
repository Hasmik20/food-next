import styles from "./mealGrid.module.css";
import MealItem from "./mealItem";

const MealsGrid = ({ meals }) => {
  return (
    <>
      <ul className={styles.meals}>
        {meals?.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealsGrid;
