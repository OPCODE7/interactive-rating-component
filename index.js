const d = document;

const $ratingItems = d.querySelectorAll(".item-rating"), $ratingSelected = d.querySelector(".thank-you-state > h3"), $containerPrincipal = d.querySelector(".state-normal-container"),
    $thankYouStateContainer = d.querySelector(".thank-you-state");

const $submitButton = d.querySelector("#submit"), $loader = d.querySelector(".loader");

let rating = "";

d.addEventListener("click", e => {
    let condition= [...$ratingItems].some(el => el.classList.contains("active-state-button"));
    $ratingItems.forEach(item => {
        if (e.target === item) {
            if (condition) 
                $ratingItems.forEach(element => element.classList.remove("active-state-button"));
            
            item.classList.toggle("active-state-button");
            rating = item.textContent;
        }
    });

    if (e.target === $submitButton) {
        if (condition) {
            $submitButton.classList.add("d-none");
            $loader.classList.remove("d-none");
            setTimeout(() => {
                $loader.classList.add("d-none");
                $submitButton.classList.remove("d-none");
                $containerPrincipal.classList.add("d-none");
                $thankYouStateContainer.classList.remove("d-none");

                $ratingSelected.textContent += rating;
            }, 1000);
        }

    }



});