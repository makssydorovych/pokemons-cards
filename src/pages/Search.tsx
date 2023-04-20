import React, {useEffect} from 'react';
import Wrapper from "../sections/Wrapper";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {getInitialPokemonData} from "../app/reducers/getInitialPokemonData";

const Search = () => {
    const dispatch = useAppDispatch();
    const {allPokemon} = useAppSelector(({pokemon})=>pokemon)
    useEffect(()=>{
dispatch(getInitialPokemonData())
    },[dispatch])
useEffect(()=>{
if(allPokemon){
    const clonedPokemons = [...allPokemon];
    const randomPokemonsId = clonedPokemons.sort(()=>Math.random()-Math.random())
        .slice(0, 20)
}
},[allPokemon])
    return (
        <div>
            
        </div>
    );
};

export default Wrapper(Search);