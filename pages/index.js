import Head from "next/head";
import Styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getAllRecipes } from "@/utils/recipeUtils";
import Pasta from "@/public/images/pasta.jpg";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>My Recipes</title>
        <meta name="description" content="Welcome to my recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Styles.main}>
        <h1 className={Styles.heading}>Recipes</h1>

        <div className={Styles.cardContainer}>
          {props.recipes?.length &&
            props.recipes.map((r) => (
              <div className={Styles.card} key={r.id}>
                <img src={r.img} alt="Pasta" className={Styles.cardImage} />
                <div className={Styles.cardContent}>
                  <h2 className={Styles.cardTitle}>{r.title}</h2>
                  <p className={Styles.cardDescription}>{r.description}</p>
                  <Link className={Styles.cardLink} href={`/recipe/${r.id}`}>
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipes: getAllRecipes(),
    }, // will be passed to the page component as props
  };
}
