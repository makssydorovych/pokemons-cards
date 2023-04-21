import {createAsyncThunk} from "@reduxjs/toolkit";
import {genericPokemonType} from "../../utils/types";
import axios from "axios";

export const getPokemonData = createAsyncThunk("pokemon/randomPokemon", async (pokemons: genericPokemonType[] )=>{
try {
const pokemonsData: genericPokemonType[] =[];
for await (const pokemon of pokemons){
    const {data}=await axios.get(pokemon.url)
}
;}catch (err){

}
})