function zoom(event) {
    const filterIngredients = document.querySelector("#filter_ingredients");
    const filterDevices = document.querySelector("#filter_devices");
    const filterTools = document.querySelector("#filter_tools");    

    if (event.target.id !== "filter_ingredients") {
        filterIngredients.style.width = "10em";
        filterIngredients.setAttribute("active", "false");
    } else {
        filterIngredients.style.width = "13.5em";
        filterIngredients.setAttribute("active", "true");
    }

    if (event.target.id !== "filter_devices") {
        filterDevices.style.width = "10em";
        filterDevices.setAttribute("active", "false");
    } else {
        filterDevices.style.width = "13.5em";
        filterDevices.setAttribute("active", "true");
    }

    if (event.target.id !== "filter_tools") {
        filterTools.style.width = "10em";
        filterTools.setAttribute("active", "false");
    } else {
        filterTools.style.width = "13.5em";
        filterTools.setAttribute("active", "true");
    }

}

document.addEventListener("click", zoom)
