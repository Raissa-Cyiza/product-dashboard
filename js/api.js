const BASE_URL = 'https://dummyjson.com/products';

function transformProductData(product) {
  return {
    name: product.title || 'Unknown Item',
    flag: product.thumbnail || '', 
    population: product.price ? `$${product.price}` : 'N/A', 
    region: product.category || 'General', 
    capital: product.brand || 'Generic' 
  };
}

export async function fetchAllCountries() {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }

  const result = await response.json();
  const rawProducts = result.products || [];
  
  return rawProducts.map(transformProductData);
}