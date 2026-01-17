//Interface raccourcie pour représenter une ressource unique avec name et url
export interface APINamedRessource{
    name: string;
    url: string;
}

//Interface pour un bloc list de réponse
export interface APIListResponse{
    count: number;
    previous: string | null;
    next: string | null;

    results: APINamedRessource[];
}

//Données de mes sprites pokémon
export interface PokemonSprites{
    front_default: string;
    other?: {
      "official-artwork":{
        front_default: string;
      };
      home?:{
        front_default: string;
      }
    };
    showdown?: {
      front_default: string;
    };
}

// Les Types de pokemoon
export interface PokemonType {
  slot: number;
  type: APINamedRessource;
}

//les Stats
export interface PokemonStat {
  base_stat: number;
  stat: APINamedRessource;
}

//Abilities des pokemons
export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: APINamedRessource;
}

// Les Cris de pokemons
export interface PokemonCries {
  latest: string;
  legacy: string;
}

// Les Attaques mode simplifié pour la fiche vu que l'API donne juste le nom de l'attaque
// Pour avoir le type de l'attaque il faudra faire un autre fetch plus tard, au niveau de la partie équipe...
export interface PokemonMove {
    move: APINamedRessource;
}


export interface Pokemon {
  id: number;
  name: string;
  height: number; // c'est en décimètres donc pr 7 on a 0.7m, à gérer ap
  weight: number; // et cà c'est eeeen hectogrammes donc 69 => 6.9kg
  
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  cries: PokemonCries;

}