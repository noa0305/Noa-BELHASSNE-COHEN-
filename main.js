document.querySelectorAll(".caroussel").forEach((caroussel) => { 
    const items = caroussel.querySelectorAll(".caroussel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="caroussel__button"></span>`;
    });

    caroussel.insertAdjacentHTML (
        "beforeend",
        `
    <div class="caroussel__nav"> 
    ${buttonsHtml.join("")}
    </div>
    `
    );


    const buttons = caroussel.querySelectorAll(".caroussel__button");
    buttons.forEach ( (button,i) => { 
        button.addEventListener("click", () => {
    // un-select all the items
    items.forEach ((item) => 
        item.classList.remove("caroussel__item--selected")
        );
    buttons.forEach((button) =>
        button.classList.remove("caroussel__button--selected")
        );

    items[i].classList.add("caroussel__item--selected");
    button.classList.add("caroussel__button--selected");
        });
    });

    // Select the first item on page load
    items[0].classList.add("caroussel__item--selected");
    buttons[0].classList.add("caroussel__button--selected"); 
    
});


