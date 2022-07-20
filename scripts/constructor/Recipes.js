class Recipe {

    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._servings = data.servings;
        this._time = data.time;
        this._description = data.description;
        this._appliance = data.appliance;
        this._ustensils = data.ustensils;
    }

    templateDisplayRecipe() {
        return `
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
                            <p>test</p>
                        </div>
                        <div class="card_footer_recipe_right">
                            <p>${this._description}</p>
                        </div>
                    </div>
                </div>
            </article>
        `
    }
}