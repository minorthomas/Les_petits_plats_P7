const filterIngredientsBtn = document.querySelector("#filter_ingredients");
const filterDevicesBtn = document.querySelector("#filter_devices");
const filterToolsBtn = document.querySelector("#filter_tools");

function btnZoom() {
    filterIngredientsBtn.addEventListener("click", event => {
        event.preventDefault();

        if(filterIngredientsBtn.getAttribute("active") === "false") {
            filterIngredientsBtn.setAttribute("active", "true")

            filterIngredientsBtn.style.width = "12em";

            filterToolsBtn.setAttribute("active", "false")
            filterDevicesBtn.setAttribute("active", "false")

            filterDevicesBtn.style.width = "10em";
            filterToolsBtn.style.width = "10em";
        } else {
            filterIngredientsBtn.setAttribute("active", "false")

            filterIngredientsBtn.style.width = "10em";
        }
    })

    filterDevicesBtn.addEventListener("click", event => {
        event.preventDefault();

        if(filterDevicesBtn.getAttribute("active") === "false") {
            filterDevicesBtn.setAttribute("active", "true")

            filterDevicesBtn.style.width = "12em";

            filterIngredientsBtn.setAttribute("active", "false")
            filterToolsBtn.setAttribute("active", "false")

            filterIngredientsBtn.style.width = "10em";
            filterToolsBtn.style.width = "10em";
        } else {
            filterDevicesBtn.setAttribute("active", "false")

            filterDevicesBtn.style.width = "10em";
        }
    })

    filterToolsBtn.addEventListener("click", event => {
        event.preventDefault();

        if(filterToolsBtn.getAttribute("active") === "false") {
            filterToolsBtn.setAttribute("active", "true")

            filterToolsBtn.style.width = "12em";

            filterIngredientsBtn.setAttribute("active", "false")
            filterDevicesBtn.setAttribute("active", "false")

            filterDevicesBtn.style.width = "10em";
            filterIngredientsBtn.style.width = "10em";
        } else {
            filterToolsBtn.setAttribute("active", "false")

            filterToolsBtn.style.width = "10em";
        }
    })
}

btnZoom();