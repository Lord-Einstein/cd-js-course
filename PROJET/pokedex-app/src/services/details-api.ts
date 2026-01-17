import type { APIListResponse } from "../types/poke-type";

const API_URL = "https://pokeapi.co/api/v2";
const API_TYPE = "pokemon";

export async function pokeListApiFetcher(offset: number = 0, limit: number = 20): Promise<APIListResponse|null> {

    try{

        const url = `${API_URL}/${API_TYPE}?offset=${offset}&limit=${limit}`;
        const apiResponse = await fetch(url);

        if(!apiResponse.ok) {
            //le throw va lancer au try-catch qu'il rentre la suite de l'exécution (du coup on passe dans le cons..error
            //pour faire un return null propre.Un con..err à ce moment aurait mis une erreur puis continuer l'exécution.)
            throw new Error(`Retour d'erreur : ${apiResponse.status}`); 
        }

        const data = await apiResponse.json() as APIListResponse;
        return data;

    } catch(error) {
        console.error("Erreur d'exécution :", error);
        return null;
    }

}