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

filterBySearch();