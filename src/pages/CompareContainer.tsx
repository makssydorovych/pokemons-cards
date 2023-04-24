import React from 'react';
import {userPokemonsType} from "../utils/types";
import {FaPlus} from "react-icons/fa";
import {pokemonTypeInterface} from "../utils/types";
const CompareContainer = ({pokemon = undefined, isEmpty = false}: { pokemon?: userPokemonsType, isEmpty?: boolean }
) =>
{
    return (
        <div className="compare-container">
            {isEmpty &&
            <div className="empty">
            <button><FaPlus/></button>
                <h3>Add Pokemon</h3>
            </div>
            }
            {
                pokemon &&
                <div className="compare-element">
                        <div className="compare-info">
                            <div className="compare-details">
                                <h3>{pokemon?.name}</h3>
                                <img src={pokemon?.image} alt="pokemon image" className="compare-image"/>
                            </div>
                            <div className="pokemon-types container">
                                <div className="pokemon-types">
                                    <h4 className="pokemon-type-title">Type</h4>
                                    <div className="pokemon-type-icons">
                                        {pokemon?.types.map((type: pokemonTypeInterface)=>{
                                        const keys = Object.keys(type)
                                            return (
                                                <div className="pokemon-type">
                                            <img src={type[keys[0]].image} alt="type of pokemon"/>
                                            </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            }
        </div>
    );
}
;

export default CompareContainer;