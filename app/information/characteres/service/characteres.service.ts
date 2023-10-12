import { Character } from "../models";



export const getCharacteres = (): Promise<Character[]> => {
    const url = 'https://rickandmortyapi.com/api/character';

    return fetch(url)   
            .then( res => res.json() )
            .then( data => data.results )
}