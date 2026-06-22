const appContainer = document.getElementById('app');

export function renderLoading() {
  appContainer.innerHTML = `<div class="state-message">⏳ Loading product catalog...</div>`;
}

export function renderError(message, retryCallback) {
  appContainer.innerHTML = `
    <div class="state-message error">
      <p>⚠️ Something went wrong: ${message}</p>
      <button id="retry-btn">Try Again</button>
    </div>
  `;
  document.getElementById('retry-btn').addEventListener('click', retryCallback);
}

export function renderEmptyState(query) {
  appContainer.innerHTML = `<div class="state-message">🔍 No products found for "${query}".</div>`;
}

export function renderCountryList(products) {
  appContainer.innerHTML = '<div class="grid-container"></div>';
  const grid = appContainer.querySelector('.grid-container');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <img src="${product.flag}" alt="${product.name}" class="card-flag">
      <div class="card-info">
        <h3>${product.name}</h3>
        <p><strong>Price:</strong> ${product.population}</p>
        <p><strong>Category:</strong> ${product.region}</p>
        <p><strong>Brand:</strong> ${product.capital}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}