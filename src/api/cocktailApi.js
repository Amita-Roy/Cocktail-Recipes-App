import axios from 'axios';

const client = axios.create({
  baseURL: 'www.thecocktaildb.com/api/json/v1/1',
});

export const fetchCocktails = async () => {
  try {
    const response = await client.get('filter.php?c=Cocktail');
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchCocktail = async ({ id }) => {
  try {
    const response = await client.get(`lookup.php?i=${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
