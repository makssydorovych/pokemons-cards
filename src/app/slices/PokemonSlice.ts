import {generatedPokemonType, PokemonInitialStateType} from "../../utils/types";
import {createSlice} from "@reduxjs/toolkit";
import {getInitialPokemonData} from "../reducers/getInitialPokemonData";
import {getPokemonsData} from "../reducers/getPokemonsData";


const initialState: PokemonInitialStateType = {
    allPokemon: undefined,
    randomPokemons: undefined,
    compareQueue: [],
};
export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addToCompare: (state,action)=>{
            const index = state.compareQueue.findIndex((pokemon: generatedPokemonType)=>pokemon.id === action.payload.id);
            if(index === -1){
                if(state.compareQueue.length==2){

                }
                state.compareQueue.unshift(action.payload);
            }
}
    },
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        });
        builder.addCase(getPokemonsData.fulfilled, (state, action) => {
            state.randomPokemons = action.payload
        })
    },
})
export const {} = PokemonSlice.actions;