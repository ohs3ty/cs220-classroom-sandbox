const petContainer = document.getElementById("pet-container");

function createPet(image, name, age, breed, description, isAdopted, favorite) {
    return {
        image: image,
        name: name,
        age: age,
        breed: breed,
        description: description,
        isAdopted: isAdopted,
        favorite: favorite
    };
}

const mochiPet = createPet(
    "./images/mochi.png",
    "Mochi",
    2,
    "Orange Tabby",
    "Mochi is a playful and energetic cat who loves chasing toys and taking naps in sunny windows.",
    false,
    false
);

function toggleAdoption(pet) {
    pet.isAdopted = !pet.isAdopted;
}

function renderPetCard(pet) {
    petContainer.innerHTML = `
        <div class="pet-card">
            <img src="${pet.image}" alt="Image of ${pet.name}" />

            <div class="pet-content">
                <h2>${pet.favorite ? "⭐ " : ""}${pet.name}</h2>

                <p>
                    ${pet.name} is a ${pet.age}-year-old ${pet.breed}.
                </p>

                <p>
                    ${pet.description}
                </p>

                <p class="${pet.isAdopted ? "adopted" : "available"}">
                    ${pet.isAdopted ? "Adopted" : "Available for Adoption"}
                </p>

                <div class="button-group">
                    <button class="${pet.isAdopted ? "return-btn" : "adopt-btn"}">
                        ${pet.isAdopted ? "Return Pet" : "Adopt Me"}
                    </button>
                </div>
            </div>
        </div>
    `;

    const adoptButton = petContainer.querySelector("button");

    adoptButton.addEventListener("click", function () {
        toggleAdoption(pet);
        renderPetCard(pet);
    });
}

renderPetCard(mochiPet);