export class Pet {
    constructor(id, name, species, age, image, adopted = false, favorite = false) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.age = age;
        this.image = image;
        this.adopted = adopted;
        this.favorite = favorite;
    }

    toggleAdopted() {
        this.adopted = !this.adopted;
    }

    toggleFavorite() {
        this.favorite = !this.favorite;
    }
}