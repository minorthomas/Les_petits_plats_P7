class Recipe {

    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._servings = data.servings;
        this._ingredients = data.ingredients;
        this._time = data.time;
        this._description = data.description;
        this._appliance = data.appliance;
        this._ustensils = data.ustensils;
    }

    render() {
        //set variable à vide
        let ingredients = "";

        //boucle recup les ingrédients individuellement
        this._ingredients.forEach((ingr) => {
            if (ingr.quantity) { //si quantité
                if (ingr.unit && ingr.quantity) { //si quantité & unité
                    ingredients += `<p>${ingr.ingredient}: <span>${ingr.quantity} ${ingr.unit}</span></p>`;
                } else { //si juste quantity
                    ingredients += `<p>${ingr.ingredient}: <span>${ingr.quantity}</span></p>`;
                }
            } else { //si juste ingrédient
                ingredients += `<p>${ingr.ingredient}</p>`;
            }
        });

        //display la recette
        const recipeCard = `
            <article>
                <div class="card_header">
                    <img src="assets/icons/no_image_available.svg" alt="Pas d'image" />
                </div>
                <div class="card_footer">
                    <div class="card_footer_infos">
                        <h2>${this._name}</h2>
                        <p>${this._time} min</p>
                    </div>
                    <div class="card_footer_recipe">
                        <div class="card_footer_recipe_left">
                            ${ingredients}
                        </div>
                        <div class="card_footer_recipe_right">
                            <p>${this._description}</p>
                        </div>
                    </div>
                </div>
            </article>
        `

        return recipeCard
    }
}

