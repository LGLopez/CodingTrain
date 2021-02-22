console.log("Pa ver al perrin");

retrieveDog();

async function retrieveDog() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response);
}