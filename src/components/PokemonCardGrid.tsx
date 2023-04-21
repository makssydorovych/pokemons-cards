import React from 'react';
import {userPokemonsType} from "../utils/types";



const PokemonCardGrid = ({pokemons}: {pokemons: userPokemonsType[]}) => {
    return (
        <div className="pokemon-card-grid-container">
            <div className="pokemon-card-grid">
                {
                    pokemons && pokemons.length >0 &&
                pokemons?.map((data:userPokemonsType)=>{
                    return <div className="pokemon-card" key={data.id}>
                    <div className="pokemon-card-lis"></div>
                    </div>
                })
                }
            </div>
        </div>
    );
};

export default PokemonCardGrid;