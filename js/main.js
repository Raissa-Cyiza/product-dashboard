import { fetchAllCountries } from './api.js';
import { renderLoading, renderError, renderCountryList, renderEmptyState } from './render.js';

// Application State
const appState = {
  allCountries: [],
  filteredCountries: [],
  searchTerm: ''
};

async function loadDashboard() {
  try {
    renderLoading();
    
    // Fetch and save the transformed data array
    appState.allCountries = await fetchAllCountries();
    appState.filteredCountries = [...appState.allCountries];
    
    setupSearch();
    displayUI();
  } catch (error) {
    console.error(error);
    renderError(error.message, loadDashboard);
  }
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', (e) => {
    appState.searchTerm = e.target.value.toLowerCase();
    
    // Array filter method matching names
    appState.filteredCountries = appState.allCountries.filter(country => 
      country.name.toLowerCase().includes(appState.searchTerm)
    );
    
    displayUI();
  });
}

function displayUI() {
  if (appState.filteredCountries.length === 0) {
    renderEmptyState(appState.searchTerm);
  } else {
    renderCountryList(appState.filteredCountries);
  }
}

// Fire up the program
loadDashboard();