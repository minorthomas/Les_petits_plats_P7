async function displayRecipesCard() {
    const { recipes } = await getRecipes();

    const cardsSection = document.querySelector("#cards_section");

    recipes.forEach(recipe => {
        const createRecipeCard = new Recipe(recipe);

        cardsSection.innerHTML += createRecipeCard.render();
    });


}

displayRecipesCard();