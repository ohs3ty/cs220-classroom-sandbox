// 1. Pet data
const pet = {
    name: "Mochi",
    species: "Cat",
    age: 3,
    adopted: false,
    image: "images/mochi.png"
};

// 2. Find the container on the page
const petContainer = document.querySelector("#pet-container");

// 3. Create a function that builds the pet card
function createPetCard(pet) {
    const petCard = document.createElement("div");
    petCard.classList.add("pet-card");

    const petImage = document.createElement("img");
    petImage.src = pet.image;
    petImage.alt = `${pet.name} the ${pet.species}`;

    const petContent = document.createElement("div");
    petContent.classList.add("pet-content");

    const petName = document.createElement("h2");
    petName.textContent = pet.name;

    const petInfo = document.createElement("p");
    petInfo.textContent = `${pet.name} is a ${pet.age}-year-old ${pet.species}.`;

    const petStatus = document.createElement("p");

    if (pet.adopted) {
        petStatus.textContent = "❌ Adopted";
        petStatus.classList.add("adopted");
    } else {
        petStatus.textContent = "✅ Available for Adoption";
        petStatus.classList.add("available");
    }

    petContent.appendChild(petName);
    petContent.appendChild(petInfo);
    petContent.appendChild(petStatus);

    petCard.appendChild(petImage);
    petCard.appendChild(petContent);

    return petCard;
}

// 4. Render the pet card to the page
const petCard = createPetCard(pet);
petContainer.appendChild(petCard);