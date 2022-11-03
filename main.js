

let form = document.querySelector('#pokeform');
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokename = event.path[0][0].value
    console.log(pokename);
    loadPoke(pokename);
    form.reset();

}
);

let catchEm = async (pokename) => {
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
       console.log(response.data)
       return response.data; 
    } catch (error) {
        console.log(error)
    }
};

let loadPoke = async (pokename) => {
    let data = await catchEm(pokename);
    console.log(data);
    let new_rows = ` <div><h5>${data.forms[0].name}</h5></div>
       
     <div><img src="${data.sprites.other["official-artwork"].front_default}"></img></div>`;
        document.getElementById('pokeimg').insertAdjacentHTML('afterbegin', new_rows);
}

let clearPKData = () => {
    document.getElementById('pokeimg').innerHTML='';
}