import {createAsyncThunk} from "@reduxjs/toolkit";
import {pokemonsRoute} from "../../utils/Constants";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async () => {
    try {
        const {data} = await axios.get(pokemonsRoute)
        console.log(data)
        return data.res;
    } catch (err) {

    }
})