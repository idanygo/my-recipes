import { getOneRecipe } from "@/utils/recipeUtils";
import Link from "next/link";
import styles from "@/styles/Recipe.module.css";

export default function RecipePage(props) {
  if (!props.recipe) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1 className={styles.heading}>{props.recipe.title}</h1>
      <h2>{props.recipe.description}</h2>
      <div>
        <h3>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <ul>
          {props.recipe.instructions.map((inst) => (
            <li key={inst}>{inst}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipe: getOneRecipe(context.params.id) || null,
    }, // will be passed to the page component as props
  };
}
