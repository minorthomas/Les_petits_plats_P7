async function getRecipes() { //fetch recup data fichier json
    const recipes = fetch("/data/recipes.json")
        .then((res) => res.json()) //reponse en json
        .then((recipes) => recipes) //recup les recettes
        .catch((err) => console.log(err)); //gestion erreur

    return recipes; //retourne les recettes
}
