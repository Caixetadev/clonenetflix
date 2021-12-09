const API_KEY = '53d3ee673d093d4311541837e6b4c437';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json()
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais do Netflix',
        item: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        item: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        item: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        item: await basicFetch(`/discover/movie?with_geners=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        item: await basicFetch(`/discover/movie?with_geners=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        item: await basicFetch(`/discover/movie?with_geners=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        item: await basicFetch(`/discover/movie?with_geners=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        item: await basicFetch(`/discover/movie?with_geners=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  }
}