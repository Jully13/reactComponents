const Loader = () => {
    // eslint-disable-next-line no-console
    return fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    // .then((response) => response.json())
    // .then((data) => {
    //     return data.name;
    // });
};

export default Loader;
