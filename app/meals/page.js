import Link from "next/link";

import styles from "./mealPage.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getAllMeals } from "@/services/action";
import { Suspense } from "react";
import { Skeleton } from "@/components/meals/Skeleton";

export const metadata = {
  title: "All meals",
};

const Meals = async () => {
  const allMeals = await getAllMeals();
  const meals = allMeals.slice(0, 6);
  return <MealsGrid meals={meals} />;
};
const MealPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created
          <span className={styles.highlight}> by you</span>
          <p>Choose your favorite recipe and cook it</p>
        </h1>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<Skeleton />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealPage;
