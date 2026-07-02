const pet = {
    name: "Mochi",
    species: "cat",
    age: 3,
    adopted: false,
    favorite: false,
    image: "images/mochi.png"
};

const petContainer = document.getElementById("pet-container");

function createPetCard(pet) {
    petContainer.innerHTML = "";

    const petCard = document.createElement("div");
    petCard.classList.add("pet-card");

    const petImage = document.createElement("img");
    petImage.src = pet.image;
    petImage.alt = `${pet.name} the ${pet.species}`;

    const petContent = document.createElement("div");
    petContent.classList.add("pet-content");

    const petName = document.createElement("h2");
    petName.textContent = pet.favorite ? `⭐ ${pet.name}` : pet.name;

    const petInfo = document.createElement("p");
    petInfo.textContent = `${pet.name} is a ${pet.age}-year-old ${pet.species}.`;

    const petStatus = document.createElement("p");
    petStatus.textContent = pet.adopted
        ? "Adopted"
        : "Available for Adoption";

    petStatus.classList.add(pet.adopted ? "adopted" : "available");

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");

    const adoptButton = document.createElement("button");
    adoptButton.textContent = pet.adopted ? "Return Pet" : "Adopt Me";
    adoptButton.classList.add(pet.adopted ? "return-btn" : "adopt-btn");

    adoptButton.addEventListener("click", function () {
        pet.adopted = !pet.adopted;
        createPetCard(pet);
    });

    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = pet.favorite ? "★ Favorited" : "☆ Favorite";
    favoriteButton.classList.add("favorite-btn");

    favoriteButton.addEventListener("click", function () {
        pet.favorite = !pet.favorite;
        createPetCard(pet);
    });

    buttonGroup.appendChild(adoptButton);
    buttonGroup.appendChild(favoriteButton);

    petContent.appendChild(petName);
    petContent.appendChild(petInfo);
    petContent.appendChild(petStatus);
    petContent.appendChild(buttonGroup);

    petCard.appendChild(petImage);
    petCard.appendChild(petContent);

    petContainer.appendChild(petCard);
}

createPetCard(pet);