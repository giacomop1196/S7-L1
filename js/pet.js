class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    hasSameOwner(otherPet) {
        //Confronto i nomi dei proprietari dei pet
        return otherPet instanceof Pet && this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
    }
}

const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')
const formElement = document.getElementById('pets-form')
const petsTableBody = document.getElementById('pets-table-body')
const petsTable = document.getElementById('pets-table')
//Array dei pets vuoto
const pets = []

//Array delle specie
const speciesList = [
    'Cane',
    'Gatto',
    'Coniglio',
    'Pesce',
    'Pappagallo'
]

//Array delle razze
const breedList = [
    'Labrador',
    'Pincher',
    'Nano',
    'Soriano',
    'Persiano'
]


//Funzione per visualizzare le specie nella select
function renderSpecies() {
    species.innerHTML = '';
    speciesList.forEach(specie => {
        const option = document.createElement('option');
        option.textContent = specie;
        option.value = specie;
        species.appendChild(option);
    });
}

//Funzione per visualizzare le razze nella select
function renderBreed() {
    breed.innerHTML = '';
    breedList.forEach(breeds => {
        const option = document.createElement('option');
        option.textContent = breeds;
        option.value = breeds;
        breed.appendChild(option);

    })
}

//Funzione per visualizzare la tabella dei pets
function renderPetsTable() {

    //Tolgo la classe invisible se l'array pets non è vuoto
    if (pets.length > 0) {
        petsTable.classList.remove('invisible')
    }

    petsTableBody.innerHTML = ''

    pets.forEach((pet, index) => {

        const tableRow = document.createElement('tr');

        // Controllo se il proprietario del pet corrente è condiviso con altri pet
        let hasSharedOwner = false;
        for (let i = 0; i < pets.length; i++) {
            // Evito di confrontare il pet con se stesso e controlla se i proprietari sono uguali
            if (i !== index && pet.hasSameOwner(pets[i])) {
                hasSharedOwner = true;
                break; // Trovato un pet con lo stesso proprietario usciamo dal ciclo
            }
        }

        // Aggiungo la classe table-primary se il proprietario è condiviso
        if (hasSharedOwner) { //Aggiungo la classe se hasShareOwner è true
            tableRow.classList.add('table-primary');
        }

        const petNameCell = document.createElement('td')
        petNameCell.textContent = pet.petName
        tableRow.appendChild(petNameCell)

        const ownerNameCell = document.createElement('td')
        ownerNameCell.textContent = pet.ownerName
        tableRow.appendChild(ownerNameCell)

        const speciesCell = document.createElement('td')
        speciesCell.textContent = pet.species
        tableRow.appendChild(speciesCell)

        const breedCell = document.createElement('td')
        breedCell.textContent = pet.breed
        tableRow.appendChild(breedCell)

        petsTableBody.appendChild(tableRow)
    })
}

//Prendo i valori dal form e li aggiungo all'array pets
formElement.addEventListener('submit', function (e) {
    e.preventDefault()
    const newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        species.value,
        breed.value
    )
    formElement.reset()
    pets.push(newPet)
    console.log(pets)
    renderPetsTable()
})

renderPetsTable()
renderSpecies()
renderBreed()
