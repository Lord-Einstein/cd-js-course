import './styles/style.css'
import './components/poke-list-card'
import { pokeListApiFetcher } from './services/details-api'

const displayLimit = 6;

let currentOffset = 0;
let totalPokemons = 0;

const appDiv = document.querySelector<HTMLDivElement>('#app')!;

appDiv.innerHTML = `
  <div class="app-container">
    <h1 class="app-title">Pokédex</h1>
    
    <div class="pagination-container">
        <button id="btn-prev" disabled>◀</button>
        
        <div class="page-selector">
            Page <input type="number" id="page-input" class="page-input" value="1" min="1"> 
            <span style="color: var(--text-muted)">sur</span> <span id="total-pages">...</span>
        </div>

        <button id="btn-next">▶</button>
    </div>

    <div id="pokemon-container" class="cards-grid">
        </div>
    
  </div>
`;

const container = document.getElementById('pokemon-container')!;
const btnPrev = document.getElementById('btn-prev') as HTMLButtonElement;
const btnNext = document.getElementById('btn-next') as HTMLButtonElement;
const pageInput = document.getElementById('page-input') as HTMLInputElement;
const totalPagesSpan = document.getElementById('total-pages')!;


/**
 * Affichage des squelettes pour éviter l'effet qui casse
 */
function renderSkeletons() {
  const skeletons = Array(displayLimit).fill('<div class="skeleton-card"></div>').join('');
  container.innerHTML = skeletons;
}

function calculateTotalPages() {
  return Math.ceil(totalPokemons / displayLimit);
}

function updatePaginationUI() {
  const currentPage = (currentOffset / displayLimit) + 1;
  const totalPages = calculateTotalPages();

  pageInput.value = currentPage.toString();
  pageInput.max = totalPages.toString();
  totalPagesSpan.textContent = totalPages.toString();

  btnPrev.disabled = (currentPage <= 1);
  btnNext.disabled = (currentPage >= totalPages);
}


/**
 * Fonction principale pour charger et afficher une page
*/
async function loadPage(offset: number) {
  renderSkeletons();

  const data = await pokeListApiFetcher(offset, displayLimit);

  if (!data) {
    container.innerHTML = '<p>Erreur de chargement.</p>';
    return;
  }

  //mettre à jour le total des eléments poke
  totalPokemons = data.count;

  //les vraies cartes
  const cardsHtml = data.results.map(pokemon => {
    const urlParts = pokemon.url.split('/');
    const id = urlParts[urlParts.length - 2];
    return `<pokemon-card pokemon-id="${id}"></pokemon-card>`;
  }).join('');

  container.innerHTML = cardsHtml;

  updatePaginationUI();
}

/**
 * Changer de page à partir de l'input
 */
function handleInputNavigation() {

  let page = parseInt(pageInput.value);
  const maxPages = calculateTotalPages();

  if (isNaN(page) || page < 1) page = 1; //controle des entrées
  if (page > maxPages) page = maxPages;

  currentOffset = (page - 1) * displayLimit;
  loadPage(currentOffset);
}


btnPrev.addEventListener('click', () => {
    if (currentOffset > 0) {
        currentOffset -= displayLimit;
        loadPage(currentOffset);
    }
});

btnNext.addEventListener('click', () => {
    // s'assurer de ne pas exced le total d'element poke
    if (currentOffset + displayLimit < totalPokemons) {
      currentOffset += displayLimit;
      loadPage(currentOffset);
    }
});

pageInput.addEventListener('change', handleInputNavigation);


console.log("Programme lancé");
loadPage(0);