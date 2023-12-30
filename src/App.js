import React, { useState, useEffect } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";
import "./App.css";

function App() {
    const [URL, setURL] = useState(
        "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
    );
    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemons = async () => {
        const res = await fetch(URL);
        const data = (await res.json())[0];
        setURL(data.next);
        function createPokemonObject(result) {
            result.forEach(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const data = (await res.json())[0];
                setAllPokemons((currentList) => [...currentList, data]);
            });
        }
        createPokemonObject(await data.results);
    };
    useEffect(() => {
        getAllPokemons();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div id="parent">
                <div id="section">
                    <div className="content">
                        <h2>Pokemon</h2>
                        <h2>Pokemon</h2>
                    </div>
                    <div className="content2">
                        <h2>KingDom</h2>
                        <h2>KingDom</h2>
                    </div>
                </div>
                <div className="app-container">
                    <div className="pokemon-container">
                        <div className="all-container">
                            {allPokemons.map((pokemon, index) => (
                                <PokemonThumbnail
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    image={pokemon.image}
                                    type={pokemon.type}
                                    key={index}
                                    height={pokemon.height}
                                    weight={pokemon.weight}
                                    stat1={pokemon.stats[0].stat.name}
                                    stat2={pokemon.stats[1].stat.name}
                                    stat3={pokemon.stats[2].stat.name}
                                    stat4={pokemon.stats[3].stat.name}
                                    stat5={pokemon.stats[4].stat.name}
                                    stat6={pokemon.stats[5].stat.name}
                                    bs1={pokemon.stats[0].base_stat}
                                    bs2={pokemon.stats[1].base_stat}
                                    bs3={pokemon.stats[2].base_stat}
                                    bs4={pokemon.stats[3].base_stat}
                                    bs5={pokemon.stats[4].base_stat}
                                    bs6={pokemon.stats[5].base_stat}
                                />
                            ))}
                        </div>
                        <button className="load-more" onClick={() => getAllPokemons()}>
                            More Pokemons
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
