const pets = [
    new Pet(
        1,
        "Mochi",
        "cat",
        3,
        "images/mochi.png"
    ),
    new Pet(
        2,
        "Biscuit",
        "dog",
        5,
        "images/biscuit.jpg"
    ),
    new Pet(
        3,
        "Noodle",
        "rabbit",
        2,
        "images/noodle.jpg",
        true
    )
];

const petContainer = document.getElementById("pet-container");

function renderApp() {
    petContainer.innerHTML = "";

    pets.forEach(function (pet) {
        const petCard = createPetCard(pet);
        petContainer.appendChild(petCard);
    });
}

function renderPetCard(pet) {
    const petCard = document.createElement("div");
    petCard.classList.add("pet-card");

    petCard.innerHTML = `
        <img src="${pet.image}" alt="${pet.name} the ${pet.species}">

        <div class="pet-content">
            <h2>${pet.favorite ? "⭐ " : ""}${pet.name}</h2>

            <p>
                ${pet.name} is a ${pet.age}-year-old ${pet.species}.
            </p>

            <p class="${pet.adopted ? "adopted" : "available"}">
                ${pet.adopted ? "Adopted" : "Available for Adoption"}
            </p>

            <div class="button-group">
                <button class="${pet.adopted ? "return-btn" : "adopt-btn"}">
                    ${pet.adopted ? "Return Pet" : "Adopt Me"}
                </button>

                <button class="favorite-btn">
                    ${pet.favorite ? "★ Favorited" : "☆ Favorite"}
                </button>
            </div>
        </div>
    `;

    const adoptButton = petCard.querySelector(".adopt-btn, .return-btn");
    const favoriteButton = petCard.querySelector(".favorite-btn");

    adoptButton.addEventListener("click", function () {
        pet.toggleAdopted();
        renderApp();
    });

    favoriteButton.addEventListener("click", function () {
        pet.toggleFavorite();
        renderApp();
    });

    return petCard;
}

renderApp();