import Link from "next/link";

const recipes = [
  {
    id: 0,
    title: "Classic Spaghetti Bolognese",
    description:
      "A classic Italian dish featuring spaghetti in a rich tomato sauce with ground beef and vegetables.",
    ingredients: [
      "1 lb spaghetti",
      "1 lb ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 carrot, chopped",
      "1 stalk celery, chopped",
      "1 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp dried oregano",
      "1/2 tsp dried basil",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a large skillet, heat olive oil over medium-high heat.",
      "Add ground beef and cook until browned, about 5 minutes.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add carrot and celery and cook until vegetables are slightly softened, about 5 minutes.",
      "Add crushed tomatoes, salt, pepper, oregano, and basil and bring to a simmer.",
      "Reduce heat to low and let simmer for 15-20 minutes, until sauce has thickened.",
      "Serve sauce over spaghetti.",
    ],
    img: "/images/pasta.jpg",
  },
  {
    id: 1,
    title: "Roasted Chicken Thighs with Vegetables",
    description:
      "Juicy and flavorful roasted chicken thighs with vegetables, perfect for a weeknight dinner.",
    ingredients: [
      "8 bone-in, skin-on chicken thighs",
      "1 lb baby potatoes, halved",
      "1 lb baby carrots",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried thyme",
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "In a large bowl, combine potatoes, carrots, onion, garlic, olive oil, salt, pepper, and thyme.",
      "Arrange chicken thighs on a baking sheet, skin side up.",
      "Pour vegetable mixture around chicken.",
      "Bake for 40-45 minutes, until chicken is cooked through and vegetables are tender.",
      "Serve chicken and vegetables immediately.",
    ],
    img: "/images/chicken.jpg",
  },
  {
    id: 2,
    title: "Vegetarian Chili",
    description:
      "A hearty and flavorful vegetarian chili with beans, vegetables, and spices.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 bell peppers, chopped",
      "2 carrots, chopped",
      "1 zucchini, chopped",
      "1 can (28 oz) diced tomatoes",
      "2 cans (15 oz each) kidney beans, drained and rinsed",
      "1 can (15 oz) corn, drained",
      "2 tbsp chili powder",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
    ],
    instructions: [
      "In a large pot or Dutch oven, heat olive oil over medium-high heat.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add bell peppers, carrots, and zucchini and cook until vegetables are slightly softened, about 5 minutes.",
      "Add diced tomatoes, kidney beans, corn, chili powder, cumin, smoked paprika, salt, and black",
    ],

    img: "/images/vegetarianChili.jpg",
  },
  {
    id: 3,
    title: "Vegetable Stir Fry",
    description:
      "A healthy and delicious vegetable stir fry with a homemade sauce.",
    ingredients: [
      "1 lb mixed vegetables (broccoli, carrots, bell peppers, mushrooms, etc.), chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "2 tbsp soy sauce",
      "1 tbsp hoisin sauce",
      "1 tbsp rice vinegar",
      "1 tbsp cornstarch",
      "2 tbsp vegetable oil",
      "Salt and pepper, to taste",
    ],
    instructions: [
      "In a small bowl, whisk together soy sauce, hoisin sauce, rice vinegar, cornstarch, and 1/2 cup of water.",
      "In a wok or large skillet, heat vegetable oil over high heat.",
      "Add onion, garlic, and ginger and stir fry for 1-2 minutes.",
      "Add the mixed vegetables and stir fry for 3-4 minutes, until vegetables are slightly softened.",
      "Add the sauce mixture and stir until the sauce thickens and coats the vegetables.",
      "Season with salt and pepper, to taste.",
      "Serve hot over rice or noodles.",
    ],
    img: "/images/stir-fry.jpeg",
  },
  {
    id: 4,
    title: "Baked Lemon Herb Salmon",
    description:
      "A healthy and delicious dish featuring baked salmon seasoned with lemon and herbs.",
    ingredients: [
      "4 salmon fillets",
      "2 lemons, sliced",
      "4 sprigs fresh rosemary",
      "4 sprigs fresh thyme",
      "4 cloves garlic, minced",
      "2 tbsp olive oil",
      "Salt and pepper, to taste",
    ],
    instructions: [
      "Preheat the oven to 375°F.",
      "Season the salmon fillets with salt and pepper.",
      "In a small bowl, mix together the garlic and olive oil.",
      "Place the salmon fillets in a baking dish and brush with the garlic oil mixture.",
      "Top each fillet with a sprig of rosemary and thyme, and a slice of lemon.",
      "Bake for 15-20 minutes, until the salmon is cooked through and flakes easily with a fork.",
    ],
    img: "/images/salmon.jpg",
  },
  {
    id: 5,
    title: "Chicken Caesar Salad",
    description:
      "A classic salad featuring romaine lettuce, grilled chicken, and Caesar dressing.",
    ingredients: [
      "1 head romaine lettuce, chopped",
      "2 boneless, skinless chicken breasts",
      "1/2 cup Caesar dressing",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup croutons",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "Season chicken breasts with olive oil, salt, and pepper.",
      "Grill chicken for 6-8 minutes per side, or until internal temperature reaches 165°F.",
      "Let chicken rest for 5 minutes, then slice into strips.",
      "In a large bowl, combine chopped romaine, chicken strips, Caesar dressing, Parmesan cheese, and croutons.",
      "Toss to combine and serve immediately.",
    ],
    img: "/images/caesar.jpg",
  },
  {
    id: 6,
    title: "Beef Stroganoff",
    description:
      "A hearty Russian dish featuring tender beef in a creamy sauce served over egg noodles.",
    ingredients: [
      "1 lb beef sirloin, sliced into strips",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "8 oz sliced mushrooms",
      "1 cup beef broth",
      "1/2 cup sour cream",
      "2 tbsp flour",
      "2 tbsp butter",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "12 oz egg noodles",
    ],
    instructions: [
      "Cook egg noodles according to package instructions.",
      "In a large skillet, heat olive oil over medium-high heat.",
      "Add beef strips and cook until browned, about 5 minutes.",
      "Remove beef from pan and set aside.",
      "In the same pan, melt butter over medium-high heat.",
      "Add onion, garlic, and mushrooms and cook until onion is translucent and mushrooms have released their liquid, about 5 minutes.",
      "Sprinkle flour over vegetables and stir to combine.",
      "Slowly add beef broth to the pan, stirring constantly until sauce thickens.",
      "Reduce heat to low and stir in sour cream, salt, and pepper.",
      "Return beef strips to the pan and let simmer for 5-10 minutes until heated through.",
      "Serve beef stroganoff over cooked egg noodles.",
    ],
    img: "/images/beef-stroganoff.jpg",
  },
];

export const getOneRecipe = (id) => {
  return recipes[id];
};
export const getAllRecipes = () => {
  return recipes.map((r) => ({
    id: r.id,
    title: r.title,
    img: r.img,
    description: r.description,
  }));
};
