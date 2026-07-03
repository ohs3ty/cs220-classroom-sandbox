// const Pet = {
//     image: "",
//     name: "",
//     age: 0,
//     breed: "",
//     description: "",
//     isAdopted: false,
//     favorite: false,
// }

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

let mochiPet = createPet("./images/mochi.png", "Mia", 2, "orange tabby", "Mochi is a playful and energetic Shiba Inu who loves to run and play fetch.", false, true);  
console.log(mochiPet);

function toggleAdoption(pet) {
    pet.isAdopted = !pet.isAdopted;
}

function createPetCard(pet) {
    petContainer.innerHTML = `
        <div class="pet-card">
            <img src="${pet.image}" alt="Image of ${pet.name}" />
            <h2>${pet.name}</h2>
            <p>${pet.name} is a ${pet.age}-year-old ${pet.breed}. ${pet.description}</p>
        </div>
        <p>
            ${pet.isAdopted ? "Adopted." : "Available for adoption."}
        </p>

        <button>
            ${pet.isAdopted ? "Return Pet" : "Adopt Me!"}
        </button>
    `
}
console.log(mochiPet.image);
createPetCard(mochiPet);

