const filterIngredientsBtn = document.querySelector("#filter_ingredients");
const filterDevicesBtn = document.querySelector("#filter_devices");
const filterToolsBtn = document.querySelector("#filter_tools");

const filterIngredientsImg = document.querySelector("#filter_ingredients img");
const filterDevicesImg = document.querySelector("#filter_devices img");
const filterToolsImg = document.querySelector("#filter_tools img");

function btnZoom() {
    filterIngredientsBtn.addEventListener("click", event => {
        event.preventDefault();

        filterIngredientsBtn.setAttribute("active", "true")

        filterIngredientsBtn.style.width = "12em";

        filterToolsBtn.setAttribute("active", "false")
        filterDevicesBtn.setAttribute("active", "false")

        filterDevicesBtn.style.width = "10em";
        filterToolsBtn.style.width = "10em";

        filterIngredientsImg.style.transform = "rotate(180deg)";
        filterDevicesImg.style.transform = "rotate(0deg)";
        filterToolsImg.style.transform = "rotate(0deg)";
    })

    filterDevicesBtn.addEventListener("click", event => {
        event.preventDefault();

        filterDevicesBtn.setAttribute("active", "true")

        filterDevicesBtn.style.width = "12em";

        filterIngredientsBtn.setAttribute("active", "false")
        filterToolsBtn.setAttribute("active", "false")

        filterIngredientsBtn.style.width = "10em";
        filterToolsBtn.style.width = "10em";

        filterIngredientsImg.style.transform = "rotate(0deg)";
        filterDevicesImg.style.transform = "rotate(180deg)";
        filterToolsImg.style.transform = "rotate(0deg)";
    })

    filterToolsBtn.addEventListener("click", event => {
        event.preventDefault();

        filterToolsBtn.setAttribute("active", "true")

        filterToolsBtn.style.width = "12em";

        filterIngredientsBtn.setAttribute("active", "false")
        filterDevicesBtn.setAttribute("active", "false")

        filterDevicesBtn.style.width = "10em";
        filterIngredientsBtn.style.width = "10em";

        filterIngredientsImg.style.transform = "rotate(0deg)";
        filterDevicesImg.style.transform = "rotate(0deg)";
        filterToolsImg.style.transform = "rotate(180deg)";
    })
}

btnZoom();