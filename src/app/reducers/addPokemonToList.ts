import {createAsyncThunk} from "@reduxjs/toolkit";
import {pokemonStatsType, pokemonTypeInterface, userPokemonsType} from "../../utils/types";
import {RootState} from "../store";
import {setToast} from "../slices/AppSlice";
import {addDoc} from "firebase/firestore";
import {pokemonListRef} from "../../utils/firebaseConfig";

export const addPokemonToList = createAsyncThunk("pokemon/addPokemon", async (
    pokemon: {
        id: number,
        name: string,
        types: pokemonTypeInterface[] | string,
        stats?: pokemonStatsType[],
    }, {getState, dispatch}) => {
    try {
        const {app: {userInfo}, pokemon: {userPokemons}} = getState() as RootState;
        if (!userInfo?.email) {
            return dispatch(
                setToast("Please login for add pokemon to your collection.")
            )
        }
        const index = userPokemons.findIndex((userPokemon: userPokemonsType) => {
            return userPokemon.name === pokemon.name
        })
        if(index ===-1){
            let types:string[] = [];
            types = types as string[];
            await addDoc(pokemonListRef,{
                pokemon: {id: pokemon.id, name: pokemon.name, types},
            });
            // await dispatch(getUserPokemons())
            return dispatch(setToast(`${pokemon.name} added to your collection.`))
        }else{
            return dispatch(setToast(`${pokemon.name} already added to your collection.`))
        }
    } catch (err) {
        console.log(err)
    }
})