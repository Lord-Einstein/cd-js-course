// src/components/pokemon-card.ts
import { pokeApiFetcher } from "../services/poke-api.ts";
import type { Pokemon } from "../types/poke-type.ts";

const COMPONENT_STYLE = `
  <style>
    :host {
      display: block;
    }
    
    .card {
      /* Utilisation des variables définies dans le CSS global */
      background: var(--bg-card, #1e1e1e);
      color: var(--text-main, #fff);
      
      width: 160px; /* Plus petit, plus mignon */
      border-radius: 12px;
      padding: 10px;
      text-align: center;
      
      /* Ombre subtile pour le dark mode */
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      border: 1px solid #333;
      
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0,0,0,0.5);
      border-color: var(--primary, #bb86fc);
    }

    .card-img {
      width: 100px; /* Image un peu plus petite */
      height: 100px;
      object-fit: contain;
      filter: drop-shadow(0 5px 5px rgba(0,0,0,0.5));
      margin-bottom: 5px;
    }

    .card-id {
      color: var(--text-muted, #888);
      font-size: 0.75rem;
      font-weight: bold;
    }

    .card-name {
      text-transform: capitalize;
      margin: 5px 0;
      font-size: 1rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .types {
      display: flex;
      justify-content: center;
      gap: 4px;
      margin-top: 8px;
    }

    .type-badge {
      background: #333;
      padding: 3px 8px;
      border-radius: 10px;
      font-size: 0.7rem;
      color: #ccc;
      text-transform: capitalize;
    }

    .loading, .error {
      font-size: 0.8rem;
      color: #888;
      padding: 20px 0;
    }
  </style>
`;

export class PokemonGridCard extends HTMLElement {
  
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
      const pokemonId = this.getAttribute('pokemon-id');

      if(!pokemonId) {
          this.renderError("Identifiant de recherche manquant");
          return;
      }

      this.renderLoading();

      try {
          //Recup de mes datas...
          const data = await pokeApiFetcher(pokemonId);

          if (data) {
              this.renderGridPokemon(data);
          } else {
              this.renderError("Données Introuvables..");
          }

      } catch (error) {
          this.renderError("Erreur réseau :");
          console.error(error); //ma ligne de debug en cas d'erreur
      }
  }

  renderLoading() {
      if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
              ${COMPONENT_STYLE}
              <div class="card">
              <div class="loading">Chargement...</div>
              </div>
          `;
      }
  }

  renderError(msg: string):void {
      if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
              ${COMPONENT_STYLE}
              <div class="card" style="border: 2px solid red;">
              <p>Erreur : ${msg}</p>
              </div>
          `;
      }
  }

  renderGridPokemon(pokemon: Pokemon) {

    const DEFAULT_IMAGE = "https://cdn3d.iconscout.com/3d/premium/thumb/poke-ball-3d-icon-png-download-4198044.png";

    //badges de type
    const typesHtml = pokemon.types
    .map(element => `<span class="type-badge">${element.type.name}</span>`)
    .join('');

    const sprites = pokemon.sprites;
    // Mettre l'image en Hd et si pas dispo je mets l'image en 3D sinon en pixels sinon une pokeball
    const image = 
    sprites.other?.home?.front_default ||
    sprites.other?.["official-artwork"]?.front_default ||
    sprites.front_default ||
    DEFAULT_IMAGE;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        ${COMPONENT_STYLE}
        <div class="card">
            <div class="card-id">N° ${pokemon.id.toString().padStart(4, '0')}</div>
            <img class="card-img" src="${image}" alt="${pokemon.name}" />
            <h2 class="card-name">${pokemon.name}</h2>
            <div class="types">
                ${typesHtml}
            </div>
        </div>
      `;
    }
  }
}


if (!customElements.get('pokemon-card')) {
  customElements.define('pokemon-card', PokemonGridCard);
}