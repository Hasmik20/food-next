"use client";
// import { useActionState } from "react";
import { useFormState } from "react-dom";

import ImgPicker from "@/components/meals/ImgPicker";
import styles from "./mealPage.module.css";
import { shareMeals } from "@/services/action";
import SubmitBtn from "@/components/meals/SubmitBtn";

export default function ShareMealPage() {
  // const { error, action, isPending } = useActionState(shareMeals, null);
  const [state, formAction] = useFormState(shareMeals, { message: null });
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImgPicker label="Your image" name="image" />
          <p className={styles.actions}>
            {/* <button type="submit" disabled={isPending}>
              {isPending ? "Submitting..." : "Share Meal"}
            </button> */}
            <SubmitBtn />
          </p>
          {state.message && <p className="error">{state.message}</p>}
        </form>
      </main>
    </>
  );
}
