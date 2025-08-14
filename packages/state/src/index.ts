import { createApi } from '@app/api';
import { Store, StoreState } from './types';

export const createStore = (): Store => {
  const api = createApi(1000);

  const state: StoreState = {
    loading: true,
    movies: [],
  };

  const initialize = async () => {
    state.loading = true;
    try {
      const movies = await api.fetchMovies();
      state.movies = movies;
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      state.loading = false;
    }   
  };

  return {
    getState: () => state,
    initialize,
  }
};

