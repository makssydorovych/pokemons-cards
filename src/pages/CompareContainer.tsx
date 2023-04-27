import React from 'react';
import {pokemonStatType, pokemonTypeInterface, userPokemonsType} from "../utils/types";
import {FaPlus} from "react-icons/fa";
import {removeFromCompare} from "../app/slices/PokemonSlice";
import {useAppDispatch} from "../app/hooks";
import {useNavigate} from "react-router-dom";

const CompareContainer = ({pokemon = undefined, isEmpty = false}:
                              { pokemon?: userPokemonsType, isEmpty?: boolean }) => {
        const navigate = useNavigate();
        const dispatch = useAppDispatch();
        const createStatsArray = (types: pokemonTypeInterface[], statType: pokemonStatType) => {
            const statsArray: { name: string, image: string }[] = [];
            const statSet = new Set<string>();
            types.forEach((type: pokemonTypeInterface) => {
                const key = Object.keys(type)[0];

            })
        }
        const getStats = () => {
            const data = createStatsArray(pokemon?.types!, "strength")
            return <></>
        }
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
                                        {pokemon?.types.map((type: pokemonTypeInterface) => {
                                                const keys = Object.keys(type)
                                                return (
                                                    <div className="pokemon-type">
                                                        <img src={type[keys[0]].image} alt="type of pokemon"
                                                             className="pokemon-type-image"/>
                                                    </div>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                                {getStats()}
                            </div>
                        </div>
                        <div className="compare-action-buttons">
                            <button

                            >
                                Add
                            </button>
                            <button
                                className="compare-btn"
                                onClick={() => navigate(`/pokemon/${pokemon?.id}`)}
                            >
                                View
                            </button>
                            <button
                                className="compare-btn"
                                onClick={() => dispatch(removeFromCompare({id: pokemon?.id}))}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
;

export default CompareContainer;