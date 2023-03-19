import Head from "next/head";
import Styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getAllRecipes } from "@/utils/recipeUtils";
import React, { useState } from "react";

export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = props.recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Dish Discoveriess</title>
        <meta name="description" content="Welcome to my recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Styles.main}>
        <h1 className={Styles.heading}>OUR RECIPES</h1>
        <div className={Styles.descContainer}>
          <h3 className={Styles.webDesc}>
            Our curated collection of recipes is designed to satisfy your
            cravings and elevate your culinary game. <br /> We've sourced the
            best recipes from around the globe and refined them to perfection,
            so you can impress your guests with restaurant-quality meals at
            home.
          </h3>
        </div>
        <div className={`${Styles.searchContainer} searchContainer`}>
          <label htmlFor="search"></label>
          <input
            className={`${Styles.searchInput} searchInput`}
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for recipes"
          />
        </div>

        <div className={Styles.cardContainer}>
          {filteredRecipes?.length &&
            filteredRecipes.map((r) => (
              <div className={Styles.card} key={r.id}>
                <img
                  src={r.img}
                  alt={r.description}
                  className={Styles.cardImage}
                />
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
    },
  };
}
