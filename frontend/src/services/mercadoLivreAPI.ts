export async function mercadoLivreGetProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const apiResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
 
  return apiResponse.json();
}
