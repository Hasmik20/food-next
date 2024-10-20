import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/services/action";
import styles from "./items.module.css";

// export const generateMetadata = async ({ params }) => {
//   const meal = await getMeal(params.slug);

//   if (!meal) {
//     notFound();
//   }
//   return {
//     title: meal.title,
//     description: meal.summary,
//   };
// };

const MealDetailPage = async ({ params }) => {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }
  const instructions = meal[0].instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal[0].image} fill alt="img" />
        </div>
        <div className={styles.headerText}>
          <h1>{meal[0].title} </h1>
          <p className={styles.creator}>
            {" "}
            by
            <a href={`mailto:${meal[0].creator_email}`}>
              {meal[0].creator_email}
            </a>
          </p>
          <p className={styles.summary}>{meal[0].summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailPage;
