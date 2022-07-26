function filterBySearch() {
    const input = document.querySelector("#search_input");

    input.addEventListener("input", () => {
        const filter = input.value.toUpperCase();
        const article = document.querySelectorAll("#cards_section article");


        for (let i = 0; i < article.length; i++) {
            const title = article[i].querySelectorAll("h2")[0];
            const titleValue = title.textContent || title.innerText;
            if (input.value.length >= 3) {
                if (titleValue.toUpperCase().indexOf(filter) == 0) {
                    article[i].removeAttribute("style");
                } else {
                    article[i].style.display = "none";
                }
            } else {
                article[i].removeAttribute("style");
            }
        }
    })
}

async function test() {
    const { recipes } = await getRecipes();

    const ingredientsArray = [];
    const ustensilsArray = [];

    recipes.forEach(recipe => {
        const ingredients = recipe.ingredients
        const devices = recipe.appliance
        const ustensils = recipe.ustensils

        ingredients.forEach(ingredient => {
            const individualIngredient = ingredient.ingredient
            const removeSpecialsCharacters = individualIngredient.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            const toLowerCase = removeSpecialsCharacters.toLowerCase();
            const firstLetterUpper = toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1);
            ingredientsArray.push(firstLetterUpper)
        });

        ustensils.forEach(ustensil => {
            ustensilsArray.push(ustensil)
        });
    });

    ingredientsArray.sort();
    const removeDuplicatesIngredients = [...new Set(ingredientsArray)];

    const list = document.querySelector(".filters_list_ingredients");

    for (let i = 0; i < removeDuplicatesIngredients.length; i++) {
        const ingredientButton = `
            <li>
                <button>${removeDuplicatesIngredients[i]}</button>
            </li>
            `

        list.innerHTML += ingredientButton;
    }
    // console.log(ustensilsArray);
}

test();

filterBySearch();